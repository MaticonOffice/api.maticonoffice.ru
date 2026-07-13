import styles from "./styles.module.css";

const RepoButtons: React.FC<void> = () => {
  return (
    <>
      <ul className={styles["list-buttons"]}>
        <li>
          <a target="_blank" href="https://github.com/MaticonOffice/docspace-dotnet-sdk"><button id="csharp">
            C#
          </button></a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/MaticonOffice/docspace-typescript-sdk"><button id="typescript">
            TypeScript
          </button></a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/MaticonOffice/docspace-javascript-sdk"><button id="javascript">
            JavaScript
          </button></a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/MaticonOffice/docspace-python-sdk"><button id="python">
            Python
          </button></a>
        </li>
      </ul>
    </>
  );
};

export default RepoButtons;
