
/**
 * Meta data of mirrors
 * @type{{
 *   id: string; 
 *   type?: 'normal' | 'git';
 *   description?: string;
 *   displayName?: string;
 *   forceShown?: boolean;
 *   link?: string;
 *   helpID?: string;
 * }}[] */
const mirrors = [
  { id: 'linux.git', type: 'git', description: 'Linux 内核主线仓库', helpID: 'linux.git' },
  { id: 'linux-stable.git', type: 'git', description: 'Linux 内核稳定分支仓库', helpID: 'linux.git' },
  { id: 'linux-next.git', type: 'git', description: 'Linux 内核源开发分支仓库', helpID: 'linux-next.git' },
  { id: 'qemu.git', type: 'git', description: '处理器模拟器 QEMU 代码仓库' },
  { id: 'archlinux', type: 'normal', description: 'Arch Linux 软件仓库', helpID: 'archlinux' },
  { id: 'debian', type: 'normal', description: 'Debian GNU/Linux 软件仓库', helpID: 'debian' },
  { id: 'deepin', type: 'normal', description: 'Deepin 软件仓库', helpID: 'deepin' },
  { id: 'openeuler', type: 'normal', description: 'OpenEuler 软件仓库', helpID: 'openeuler' },
  { id: 'openkylin', type: 'normal', description: 'OpenKylin 软件仓库', helpID: 'openkylin' },
  { id: 'ubuntu', type: 'normal', description: 'Ubuntu 软件仓库', helpID: 'ubuntu' },
]


const config = {
  title: "华中科技大学开源镜像站",
  desc: "欢迎来到华中科技大学开源镜像站，该站点由华中科技大学为你呈现。",
  url: "https://hustmirror.cn"
}

/** 
 * Domain list
 * @type {{
 *   domain: string;
 *   desc: string;
 * }}[]
 */
const domains = [
  { domain: 'hustmirror.cn', desc: '' },
  { domain: 'mirrors.hust.edu.cn', desc: '' },
]

module.exports = {
  config,
  fields: {
    mirrors,
    domains
  }
};
