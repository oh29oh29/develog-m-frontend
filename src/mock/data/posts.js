const postMockData1 = [
  [
    { id: '101', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트1', description: 'testDesc', contents: '``` java\n' +
        'class a {\n' +
        '  public void main() {\n' +
        '    System.out.println("test");\n' +
        '  }\n' +
        '}\n' +
        '```', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p1'},
    { id: '102', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트2', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p2'},
    { id: '103', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트3', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: true, urlPathName: 'c1p3'},
    { id: '104', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트4', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p4'},
    { id: '105', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트5', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p5'},
  ],
  [
    { id: '106', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트6', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p6'},
    { id: '107', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트7', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p7'},
    { id: '108', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트8', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p8'},
    { id: '109', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트9', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p9'},
    { id: '110', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트10', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p10'},
  ],
  [
    { id: '111', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트11', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p11'},
    { id: '112', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트12', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p12'},
    { id: '113', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트13', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p13'},
    { id: '114', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트14', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p14'},
    { id: '115', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트15', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p15'},
  ],
  [
    { id: '116', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트16', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p16'},
    { id: '117', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트17', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p17'},
    { id: '118', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트18', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p18'},
    { id: '119', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트19', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p19'},
    { id: '120', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트20', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p20'},
  ],
  [
    { id: '121', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트21', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p21'},
    { id: '122', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트22', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p22'},
    { id: '123', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트23', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p23'},
    { id: '124', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트24', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p24'},
    { id: '125', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트25', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p25'},
  ],
  [
    { id: '126', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트26', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p26'},
    { id: '127', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트27', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p27'},
    { id: '128', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트28', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p28'},
    { id: '129', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트29', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p29'},
    { id: '130', categoryId: '1', categoryName: 'JAVA', memberId: 'oh29oh29', title: '카테고리1의 포스트30', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c1p30'},
  ]
];

const postMockData2 = [
  [
    { id: '201', categoryId: '2', categoryName: 'Spring 프레임워크', memberId: 'oh29oh29', title: '카테고리2의 포스트1', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c2p1'},
    { id: '202', categoryId: '2', categoryName: 'Spring 프레임워크', memberId: 'oh29oh29', title: '카테고리2의 포스트2', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c2p2'},
    { id: '203', categoryId: '2', categoryName: 'Spring 프레임워크', memberId: 'oh29oh29', title: '카테고리2의 포스트3', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c2p3'},
    { id: '204', categoryId: '2', categoryName: 'Spring 프레임워크', memberId: 'oh29oh29', title: '카테고리2의 포스트4', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c2p4'},
    { id: '205', categoryId: '2', categoryName: 'Spring 프레임워크', memberId: 'oh29oh29', title: '카테고리2의 포스트5', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c2p5'}
  ],
  [
    { id: '206', categoryId: '2', categoryName: 'Spring 프레임워크', memberId: 'oh29oh29', title: '카테고리2의 포스트6', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c2p6'},
    { id: '207', categoryId: '2', categoryName: 'Spring 프레임워크', memberId: 'oh29oh29', title: '카테고리2의 포스트7', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c2p7'}
  ]
];

const postMockData3 = [
  [
    { id: '301', categoryId: '3', categoryName: 'JavaScript', memberId: 'oh29oh29', title: '카테고리3의 포스트1', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c3p1'},
    { id: '302', categoryId: '3', categoryName: 'JavaScript', memberId: 'oh29oh29', title: '카테고리3의 포스트2', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c3p2'},
    { id: '303', categoryId: '3', categoryName: 'JavaScript', memberId: 'oh29oh29', title: '카테고리3의 포스트3', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c3p3'},
    { id: '304', categoryId: '3', categoryName: 'JavaScript', memberId: 'oh29oh29', title: '카테고리3의 포스트4', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c3p4'},
    { id: '305', categoryId: '3', categoryName: 'JavaScript', memberId: 'oh29oh29', title: '카테고리3의 포스트5', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c3p5'}
  ],
  [
    { id: '306', categoryId: '3', categoryName: 'JavaScript', memberId: 'oh29oh29', title: '카테고리3의 포스트6', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c3p6'},
    { id: '307', categoryId: '3', categoryName: 'JavaScript', memberId: 'oh29oh29', title: '카테고리3의 포스트7', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c3p7'}
  ]
];

const postMockData4 = [
  [
    { id: '401', categoryId: '4', categoryName: 'Vuejs', memberId: 'oh29oh29', title: '카테고리4의 포스트1', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c4p1'},
    { id: '402', categoryId: '4', categoryName: 'Vuejs', memberId: 'oh29oh29', title: '카테고리4의 포스트2', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c4p2'},
    { id: '403', categoryId: '4', categoryName: 'Vuejs', memberId: 'oh29oh29', title: '카테고리4의 포스트3', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c4p3'},
    { id: '404', categoryId: '4', categoryName: 'Vuejs', memberId: 'oh29oh29', title: '카테고리4의 포스트4', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c4p4'},
    { id: '405', categoryId: '4', categoryName: 'Vuejs', memberId: 'oh29oh29', title: '카테고리4의 포스트5', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c4p5'}
  ],
  [
    { id: '406', categoryId: '4', categoryName: 'Vuejs', memberId: 'oh29oh29', title: '카테고리4의 포스트6', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c4p6'},
    { id: '407', categoryId: '4', categoryName: 'Vuejs', memberId: 'oh29oh29', title: '카테고리4의 포스트7', description: 'testDesc', contents: 'testContents', regDate: '2019.01.31', lastUpdateDate: '2019.02.01', views: '100', isPrivate: false, urlPathName: 'c4p7'}
  ]
];

const postEmptyMockData = [];

const postTotalMockData = [].concat(postMockData1, postMockData2, postMockData3, postMockData4, postEmptyMockData);


export const postMockData = {
  postMockData1, postMockData2, postMockData3, postMockData4, postEmptyMockData, postTotalMockData
};
