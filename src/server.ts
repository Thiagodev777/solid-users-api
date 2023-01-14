class Appserver {
  private app: string;

  constructor(info?: string) {
    this.app = info ?? "Olá dev";
  }
}

console.log(new Appserver("OK"));
