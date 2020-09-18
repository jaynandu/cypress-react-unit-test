export interface Template {
  message: string
  getExampleUrl: ({ componentFolder }: { componentFolder: string }) => string
  recommendedComponentFolder: string
  test(): boolean
  pluginsCode: string
}
