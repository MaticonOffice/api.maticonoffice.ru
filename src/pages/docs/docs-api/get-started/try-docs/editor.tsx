import React from "react";
import Layout from "@theme/Layout";
import { useLocation } from "react-router-dom";
import MaticonOfficeEditor from "@site/src/components/BrowserWindow/MaticonofficeEditor";
import { code } from "@site/src/components/Modal/TryNowCodeModal/CodeBlock/types";
import codeblocksData from "@site/src/components/TryNow/codeblocksData.json";
import styles from "./styles.module.css";

function useQuery(): URLSearchParams {
  return new URLSearchParams(useLocation().search);
}

function Editor(): React.JSX.Element {
  const query = useQuery();
  const format: string = query.get("format") || "DOCX";
  const type: string = query.get("type") || "document";
  const category: string = query.get("category") || "Edit";
  const codeIndex: number = parseInt(query.get("codeIndex")) || 0;
  const isForm: boolean = query.get("isForm")==="true";
  const templateUrls = {
    "DOCX": {
      "Restricted review": "https://static.maticonoffice.ru/assets/docs/samples/review.docx",
      "Content control settings restricted": "https://static.maticonoffice.ru/assets/docs/samples/demo-form.docx",
      "Restricted comment": "https://static.maticonoffice.ru/assets/docs/samples/comment.docx"
    },
    "PDF": {
      "Editing forms": "https://static.maticonoffice.ru/assets/docs/samples/oform.pdf",
      "Filling in forms": "https://static.maticonoffice.ru/assets/docs/samples/oform.pdf"
    },
    "XLSX": {
      "Local filter": "https://static.maticonoffice.ru/assets/docs/samples/demo-filter.xlsx"
    }
  };
  const templateUrl: string = templateUrls[format]?.[category] || "";
  const config: code = codeblocksData[format][category][codeIndex];

  return (
    <div className={styles.noHeaderFooter}>
      <Layout>
        <MaticonOfficeEditor fileType={format.toLowerCase()} code={""} height={"100%"} config={config} isDemo={true} isForm={isForm} templateUrl={templateUrl}/>
      </Layout>
    </div>
  );
}

export default Editor;
