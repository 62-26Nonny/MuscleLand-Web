/* eslint max-len: 0 */

const ViewCompiler = require('../../../schema/viewcompiler.js');

class ViewCompiler_PG extends ViewCompiler {
  constructor(client, viewCompiler) {
    super(client, viewCompiler);
  }

  renameColumn(from, to) {
    return this.pushQuery({
      sql: `alter view ${this.viewName()} rename ${this.formatter.wrap(
        from
      )} to ${this.formatter.wrap(to)}`,
    });
  }

  defaultTo(column, defaultValue) {
    return this.pushQuery({
      sql: `alter view ${this.viewName()} alter ${this.formatter.wrap(
        column
      )} set default ${defaultValue}`,
    });
  }

  createOrReplace() {
    this.createQuery(this.columns, this.selectQuery, false, true);
  }

  createMaterializedView() {
    this.createQuery(this.columns, this.selectQuery, true);
  }
}

module.exports = ViewCompiler_PG;
