
export class Page {
  constructor(
    private readonly total: number,
    private readonly page: number,
    private readonly limit = 15,
  ) { }

  getPage(): number {
    return this.page
  }

  getSkipe(): number {
    return (this.page - 1) * this.limit
  }

  getLimit(): number {
    return this.limit
  }

  getTotal(): number {
    return this.total
  }

  getMaxPage(): number {
    return Math.trunc(this.total / this.limit) + (this.total % this.limit !== 0 ? 1 : 0)
  }

}