import dl from '../../public/images/council/dl.png';
import fpf from '../../public/images/council/fpf.png';
import gzh from '../../public/images/council/gzh.png';
import zgy from '../../public/images/council/zgy.jpg';
import ly from '../../public/images/council/ly.png';
import txf from '../../public/images/council/txf.png';
import yl from '../../public/images/council/yl.png';
import zc from '../../public/images/council/zc.png';
import zjs from '../../public/images/council/zjs.png';

const zhData = [
  {
    name: '阎璐',
    position: '创始人&理事长',
    title: ['云山保护创始人', '云山执行主任'],
    desc: '云山保护执行主任，拥有20多年灵长类保护项目经验，在中国重新发现极度濒危的灵长类，并积极推动保护区的建立，促成中国和越南双方政府和保护区的对话与合作，为这一物种制定了跨国保护行动计划。',
    avatar: yl,
  },
  {
    name: '范朋飞',
    position: '创始人&副理事长&科学顾问',
    title: ['中山大学教授', '兽类学家'],
    desc: '自2002年起对我国6种长臂猿进行了种群数量调查和生态学研究，建立了西黑冠长臂猿和高黎贡白眉长臂猿两个长期野外研究基地。高黎贡白眉长臂猿在中国的重新发现及命名者。',
    avatar: fpf,
  },
  {
    name: '谭祥芳',
    position: '副理事长',
    title: ['JAKET品牌创始人', '西南山地签约野生动物摄影师'],
    desc: '深入高山林莽、大漠冰川，追踪各种濒危野生动物，希望在JAKET服饰生活品牌中融入生态保护的元素，从消费端唤起民众的自然保护认知。',
    avatar: txf,
  },
  {
    name: '赵超',
    position: '创始人&监事',
    title: ['北京自然圈科技有限公司创始人&CEO', '鸟类及保护生物学专家'],
    desc: '他拍摄过中国四种长臂猿的野外精彩照片，为长臂猿科普宣传和保护提供了非常重要的影像支持。他参与范朋飞教授的天行长臂猿新种命名和白颊猕猴的新种发现。',
    avatar: zc,
  },
  {
    name: '刘阳',
    position: '理事&科学顾问',
    title: [
      '中山大学生态学院教授',
      '鸟类学家',
      '国际鸟类学家联盟委员',
      '中国动物学会理事',
    ],
    desc: '主要开展野生动物生态学保护生物学、生物多样性监测等方面的研究。',
    avatar: ly,
  },
  {
    name: '董磊',
    position: '理事&影像顾问',
    title: ['西南交通大学副教授 ', '缤纷自然策划总监'],
    desc: '中国资历最深的自然摄影师之一，拍摄了众多濒危野生动物的影像资料。',
    avatar: dl,
  },

  {
    name: '管振华',
    position: '科学顾问',
    title: ['西南林业大学助理研究员'],
    desc: '长期从事长臂猿野外科学研究、监测和科普工作。',
    avatar: gzh,
  },
  {
    name: '张劲硕',
    position: '科普顾问',
    title: ['中国科普作家协会副理事长', '国家动物博物馆馆长', '研究员'],
    desc: '《正大综艺•动物来啦》坐阵嘉宾。致力于青少年科普教育和科学传播，常在网络平台、广播、电视等媒体开展科普讲座，发表科普文章400多篇。',
    avatar: zjs,
  },
  {
    name: '赵广豫',
    position: '战略顾问',
    title: ['外企领导力发展项目的设计者', '科技独角兽企业的赋能者'],
    desc: '一个热爱学习热爱大自然的斜杠；外企领导力发展项目的设计者；科技独角兽企业的赋能者；云山保护成长的持续陪伴者',
    avatar: zgy,
  },
];

const enData = [
  {
    name: 'Lu Yan',
    position: 'Founder & Chairperson',
    title: [
      'Founder of Cloud Mountain Conservation',
      'Executive Director of Cloud Mountain',
    ],
    desc: [
      'Executive Director of Yunshan Conservation, Yan Lu brings over 20 years of experience in primate conservation. Her groundbreaking work includes:',
      'Rediscovering critically endangered primates in China that were previously feared extinct',
      'Spearheading protected area establishment for these species',
      'Facilitating cross-border dialogue, fostering government and protected area cooperation between China and Vietnam',
      "Developing transnational action plans to ensure the species' survival",
    ],
    avatar: yl,
  },
  {
    name: 'Pengfei Fan',
    position: 'Founder & Vice Chairperson & Scientific Advisor',
    title: [
      'Professor at Sun Yat-sen University',
      'National Outstanding Young Scholar',
      'Mammalogist',
    ],
    desc: [
      'Conducted population surveys and ecological studies on all 6 gibbon species in China since 2002',
      'Established two long-term field research stations for Western black crested gibbons and Gaoligong hoolock gibbons',
      'Rediscovered and scientifically described the Gaoligong hoolock gibbon in China',
    ],
    avatar: fpf,
  },
  {
    name: 'Xiangfang Tan',
    position: 'Vice Chairperson',
    title: [
      'Founder of JAKET Brand',
      'Contracted Wildlife Photographer at Southwest Mountain',
    ],
    desc: [
      "Documenting endangered wildlife in China's last wild frontiers",
      'Integrates conservation messaging into fashion branding to inspire consumer environmental awareness',
    ],
    avatar: txf,
  },
  {
    name: 'Chao Zhao',
    position: 'Founder & Supervisor',
    title: [
      'CEO of Beijing Natural Journey Network Technology',
      'Bird and Conservation Biology Expert',
    ],
    desc: [
      'Captured definitive wild images of 4 Chinese gibbon species, widely contributed to conservation and public education.',
      'Co-described the Skywalker hoolock gibbon (new species) with Prof. Fan',
      'Contributed to the discovery of Macaca leucogenys (white-cheeked macaque)with Prof. Fan',
    ],
    avatar: zc,
  },
  {
    name: 'Yang Liu',
    position: 'Scientific Advisor',
    title: [
      'Associate Professor at Sun Yat-sen University',
      'Ornithologist',
      'IUCN Species Survival Commission Member',
    ],
    desc: [
      'IUCN Birds Committee Member | China Zoological Society Council',
      'Research focus: wildlife ecology, conservation biology, biodiversity monitoring',
    ],
    avatar: ly,
  },
  {
    name: 'Lei Dong',
    position: 'Imaging Advisor',
    title: [
      'Teacher at Southwest Jiaotong University',
      'Planning Director at Colorful Nature',
    ],
    desc: [
      'Pioneer of Chinese wildlife photography',
      'Created essential visual archives of endangered species',
    ],
    avatar: dl,
  },
  {
    name: 'Zhenhua Guan',
    position: 'Scientific Advisor',
    title: [
      'Assistant Researcher at Yunnan Institute of Biodiversity',
      'Scientific Advisor at Cloud Mountain Conservation',
    ],
    desc: ['Field specialist: gibbon monitoring and conservation education'],
    avatar: gzh,
  },
  {
    name: 'Jinshuo Zhang',
    position: 'Science Communication Advisor',
    title: [
      'Senior Engineer at Institute of Zoology, Chinese Academy of Sciences',
      'Science Communication Planning Expert at National Zoological Museum',
    ],
    desc: [
      'Guest expert on "Zhengda Variety Show • Animals Are Coming". Dedicated to youth science education and science communication, frequently conducts science lectures on online platforms, radio, television, and other media, publishing over 400 popular science articles.',
    ],
    avatar: zjs,
  },
  {
    name: 'Guangyu Zhao',
    position: 'Strategic Advisor',
    title: ['Strategic Advisor at Cloud Mountain'],
    desc: ['Corporate leadership development expert | Tech unicorn consultant'],
    avatar: zgy,
  },
];

// Function to get data based on current locale
const getCouncilData = (locale: string) => {
  return locale === 'en-US' ? enData : zhData;
};

export default getCouncilData;
