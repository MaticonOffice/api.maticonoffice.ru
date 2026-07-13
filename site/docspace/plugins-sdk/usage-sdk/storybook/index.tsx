import {type Data} from "@maticonoffice/eleventy-types"
import {Config} from "@maticonoffice/site-config"

export function data(): Data {
  const c = Config.shared
  return {
    layout: null,
    sidebar_position: -2,
    url: c.storybookUrl,
    blank: true,
  }
}

export function render(): string {
  return ""
}
