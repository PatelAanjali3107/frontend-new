import { configData } from "..";
import { service } from "./apiList";
import { fetchUrl } from "../fetchUrl";

export const serviceListing = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(service.service.method, service.service.url, data, configData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });

export const getServiceAmbicaAll = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(
      service.serviceProviderAll.method,
      service.serviceProviderAll.url,
      data,
      configData
    )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });

export const getServiceProviderByType = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(
      service.serviceProviderByType.method,
      service.serviceProviderByType.url,
      data,
      configData
    )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });

export const ambikaRechargeApi = (data) => () => {
  new Promise((resolve, reject) => {
    fetchUrl(
      service.ambikaRecharge.method,
      service.ambikaRecharge.url,
      data,
      configData
    )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

export const getPlanDetails = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(service.getMplan.method, service.getMplan.url, data, configData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
