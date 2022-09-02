// 环境配置
const G_URL_project = process.env.VUE_APP_PROJECT
const G_URL_remoteConfigSample = process.env.VUE_APP_SUBCONVERTER_REMOTE_CONFIG
const G_URL_gayhubRelease = process.env.VUE_APP_BACKEND_RELEASE
const G_URL_shortUrlBackend = process.env.VUE_APP_MYURLS_DEFAULT_BACKEND + '/short'
const G_URL_configUploadBackend = process.env.VUE_APP_CONFIG_UPLOAD_BACKEND + '/config/upload'
const G_URL_defaultBackendSub = process.env.VUE_APP_SUBCONVERTER_DEFAULT_BACKEND + '/sub?'
const G_URL_defaultBackendVerson = process.env.VUE_APP_SUBCONVERTER_DEFAULT_BACKEND + '/version'


const G_clientTypes = {
  "Clash新参数": "clash&new_name=true",
  "ClashR新参数": "clashr&new_name=true",
  Clash: "clash",
  Surge3: "surge&ver=3",
  Surge4: "surge&ver=4",
  Quantumult: "quan",
  QuantumultX: "quanx",
  Surfboard: "surfboard",
  Loon: "loon",
  SSAndroid: "sssub",
  V2Ray: "v2ray",
  ss: "ss",
  ssr: "ssr",
  ssd: "ssd",
  ClashR: "clashr",
  Surge2: "surge&ver=2"
}

const G_customBackendOptions = {
  [`本地服务(${window.location.hostname})`]: `${window.location.protocol}//${window.location.hostname}:25500/sub?`,
  "sub.id9.cc(品云提供-稳定)": "https://sub.id9.cc/sub?",
  "sub.xeton.dev(subconverter作者提供-稳定)": "https://sub.xeton.dev/sub?",
  "api.dler.io(lhie1提供-稳定)": "https://api.dler.io/sub?",
  "sub.maoxiongnet.com(猫熊提供-稳定)": "https://sub.maoxiongnet.com/sub?"
}

const G_remoteConfig = [
  {
    label: "universal",
    options: [
      {
        label: "No-Urltest",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/no-urltest.ini"
      },
      {
        label: "Urltest",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/urltest.ini"
      }
    ]
  },
  {
    label: "customized",
    options: [
      {
        label: "Maying",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/maying.ini"
      },
      {
        label: "Ytoo",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ytoo.ini"
      },
      {
        label: "FlowerCloud",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/flowercloud.ini"
      },
      {
        label: "Nexitally",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nexitally.ini"
      },
      {
        label: "SoCloud",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/socloud.ini"
      },
      {
        label: "ARK",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ark.ini"
      },
      {
        label: "ssrCloud",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ssrcloud.ini"
      }
    ]
  },
  {
    label: "Special",
    options: [
      {
        label: "NeteaseUnblock(仅规则，No-Urltest)",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/netease.ini"
      },
      {
        label: "Basic(仅GEOIP CN + Final)",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/basic.ini"
      }
    ]
  }
]

const G_URL = {
  G_URL_project,
  G_URL_remoteConfigSample,
  G_URL_gayhubRelease,
  G_URL_shortUrlBackend,
  G_URL_configUploadBackend,
  G_URL_defaultBackendSub,
  G_URL_defaultBackendVerson
}

export const G_DEFAULT_CONFIG = {
  G_clientTypes,
  G_customBackendOptions,
  G_remoteConfig,
  ...G_URL
}

export function queryConfig () {
  return new Promise((resolve) => {
    this.$axios.get(
      '//rest.apizza.net/mock/eb3a46a6f09c8f5260393e8e7320a49d/subweb.json'
    )
      .then(res => {
        if (res.data && res.data.version) {
          resolve({
            ...Object.assign({}, G_URL, res.data.G_URL),
            G_clientTypes: Object.assign({}, G_clientTypes, res.data.G_clientTypes || {}),
            G_customBackendOptions: Object.assign({}, G_customBackendOptions, res.data.G_customBackendOptions || {}),
            G_remoteConfig: Object.assign({}, G_remoteConfig, res.data.G_remoteConfig || []),
          })
        } else {
          resolve(G_DEFAULT_CONFIG)
        }
      })
      .catch(() => {
        resolve(G_DEFAULT_CONFIG)
      })
      .finally(() => {});
  })
}