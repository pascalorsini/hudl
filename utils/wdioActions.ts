class WdioActions {
  public createTestIdSelector(...testIds: string[]): string {
    return `[data-qa-id="${testIds.join(" ")}"]`;
  }
}

export default new WdioActions();
