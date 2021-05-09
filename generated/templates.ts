// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class QuickswapPair extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("QuickswapPair", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "QuickswapPair",
      [address.toHex()],
      context
    );
  }
}

export class SushiswapPair extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("SushiswapPair", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "SushiswapPair",
      [address.toHex()],
      context
    );
  }
}

export class ComethPair extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("ComethPair", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "ComethPair",
      [address.toHex()],
      context
    );
  }
}
