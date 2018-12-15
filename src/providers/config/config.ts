import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

declare var JSBigInt;
@Injectable()
export class ConfigProvider {
  //apiUrl = "http://127.0.0.1:19070/";
  mainnetExplorerUrl = "http://explorer.bitcoin2.network/";
  testnetExplorerUrl = "http://txplorer.bitcoin2.netowrk/";
  testnet = false;
  coinUnitPlaces = 8;
  txMinConfirms = 10;         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
  txCoinbaseMinConfirms = 60; // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
  coinSymbol = 'B2N';
  openAliasPrefix = "b2n";
  coinName = 'bitcoin2network';
  coinUriPrefix = 'B2N:';
  addressPrefix = 2345936;
  integratedAddressPrefix = 2345936;
  addressPrefixTestnet = 2345936;
  integratedAddressPrefixTestnet = 2345936;
  feePerKB = new JSBigInt('200000');//20^6 - for testnet its not used; as fee is dynamic.
  dustThreshold = new JSBigInt('100000');//10^6 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
  txChargeRatio = 0.5;
  defaultMixin:any = 0; // minimum mixin 
  defaultPriority:any = 2;
  txChargeAddress = '';
  idleTimeout = 30;
  idleWarningDuration = 20;
  maxBlockNumber = 500000000;
  avgBlockTime = 90;
  debugMode = false;
  coinUnits:any = new JSBigInt(10).pow(this.coinUnitPlaces);
  activeDevFee:Boolean = false;
  devFees:any = new JSBigInt("10000000");
    
  constructor(public http: HttpClient) {
    
  }

}
