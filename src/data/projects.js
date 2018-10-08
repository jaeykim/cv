export const projects = {
  sectionTitle: '',
  icon: null,
  description: 'Projects, I have completed are listed below. To get general information about private project or not-finished projects you can get in touch.',
  categories: [
    {
      name: 'Projects in Progress',
      list: [
        {
          url: '#',
          title: 'Blockchain for fast payment',
          collaborators: [],
          description: 'Many people do not think about usage or objective of design of the blockchain. They just make one and attract other people to serve an application on their platform. We think, however, the best usage of Blockchain is a paymnet system. Therefore, we have been designing and developing a new blockchain for fast payment.',
          link: '#',
          time: 'Aug. 2018 - Present'
        },
        {
          url: '#',
          title: 'Blockchain for offloading computing platform',
          collaborators: [],
          description: 'This is included to a research named "Blockchain-based Edge Computing for Deep Neural Networks". Because we are trying to exploit blockchain for edge computing, we need a blockchain that can execute a complex program, and the execution should be executed regardless of PoW process.',
          link: '#',
          time: 'Aug. 2018 - Present'
        }
			]
    },
    {
      name: 'Completed Projects',
      list: [
        {
          url: '#',
          title: 'SNUMAP',
          collaborators: ['류기현', '박성경', '김보연', '최선웅', '최성민'],
          description: 'A map application specialized for Seoul National University. Because SNU was very big and there was no map service that had all information of the university. So we developed SNUMAP, the first map application of Seoul National University. It was a project to learn how to design and develop server-client web service, and almost all the collaborators do not major in Computer Science. We had learned a lot of things, and students in the university were enjoyed our service. However, the school made its own map application with Daum Kakao, so that we quit our service. Because it did not have a business model.',
          link: 'http://news1.kr/articles/?2407833',
          time: 'Feb. 2015 - Feb. 2016'
        }
      ]
    }
  ]
};

export default projects;
