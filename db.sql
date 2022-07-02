DROP TABLE IF EXISTS `bus_schedule`;
CREATE TABLE `bus_schedule` (
    `schedule_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '时间表id',
    `start_station_id` int(11) NOT NULL COMMENT '起始车站',
    `end_station_id` int(11) NOT NULL COMMENT '终点车站',
    `departure_time` datetime NOT NULL COMMENT '出发时间',
    `total_seat` int(11) NOT NULL COMMENT '总座位',
    `last_seat` int(11) NOT NULL COMMENT '剩余座位',
    `status` tinyint(4) NOT NULL COMMENT '班次状态',
    PRIMARY KEY (`schedule_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
DROP TABLE IF EXISTS `reserve_info`;
CREATE TABLE `reserve_info` (
  `reserve_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '预约id',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `schedule_id` int(11) NOT NULL COMMENT '校车发车id',
  `reserve_time` datetime NOT NULL COMMENT '预定时间',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '状态',
  PRIMARY KEY (`reserve_id`),
  KEY `user_schedule` (`user_id`,`schedule_id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4;
DROP TABLE IF EXISTS `notice_info`;
CREATE TABLE `notice_info` (
  `notice_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '公告id',
  `title` tinytext NOT NULL COMMENT '标题',
  `content` text NOT NULL COMMENT '内容',
  `sender_id` int(11) NOT NULL COMMENT '发送公告用户的id',
  `create_time` datetime NOT NULL COMMENT '公告发送时间',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '状态',
  PRIMARY KEY (`notice_id`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb4;
DROP TABLE IF EXISTS `question_info`;
CREATE TABLE `question_info`(
    `question_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '题目的id',
    `title` VARCHAR(128) NOT NULL COMMENT '题目题干',
    `A` VARCHAR(64) NOT NULL DEFAULT '' COMMENT '选项A内容',
    `B` VARCHAR(64) NOT NULL DEFAULT '' COMMENT '选项B内容',
    `C` VARCHAR(64) NOT NULL DEFAULT '' COMMENT '选项C内容',
    `D` VARCHAR(64) NOT NULL DEFAULT '' COMMENT '选项D内容',
    `answer` VARCHAR(4) NOT NULL DEFAULT 'A' COMMENT '题目答案',
    PRIMARY KEY (`question_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

INSERT INTO bus_schedule VALUES(1,1,2,'2022-06-19 09:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(2,2,1,'2022-06-19 11:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(3,3,4,'2022-06-19 13:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(4,4,3,'2022-06-19 15:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(5,5,6,'2022-06-19 17:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(6,6,5,'2022-06-19 19:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(7,1,2,'2022-06-20 09:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(8,2,1,'2022-06-20 11:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(9,3,4,'2022-06-20 13:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(10,4,3,'2022-06-20 15:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(11,5,6,'2022-06-20 17:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(12,6,5,'2022-06-20 19:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(13,1,2,'2022-06-21 09:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(14,2,1,'2022-06-21 11:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(15,3,4,'2022-06-21 13:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(16,4,3,'2022-06-21 15:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(17,5,6,'2022-06-21 17:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(18,6,5,'2022-06-21 19:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(19,1,2,'2022-06-22 09:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(20,2,1,'2022-06-22 11:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(21,3,4,'2022-06-22 13:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(22,4,3,'2022-06-22 15:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(23,5,6,'2022-06-22 17:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(24,6,5,'2022-06-22 19:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(25,1,2,'2022-06-23 09:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(26,2,1,'2022-06-23 11:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(27,3,4,'2022-06-23 13:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(28,4,3,'2022-06-23 15:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(29,5,6,'2022-06-23 17:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(30,6,5,'2022-06-23 19:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(31,1,2,'2022-06-24 09:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(32,2,1,'2022-06-24 11:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(33,3,4,'2022-06-24 13:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(34,4,3,'2022-06-24 15:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(35,5,6,'2022-06-24 17:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(36,6,5,'2022-06-24 19:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(37,1,2,'2022-06-25 09:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(38,2,1,'2022-06-25 11:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(39,3,4,'2022-06-25 13:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(40,4,3,'2022-06-25 15:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(41,5,6,'2022-06-25 17:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(42,6,5,'2022-06-25 19:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(43,1,2,'2022-06-26 09:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(44,2,1,'2022-06-26 11:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(45,3,4,'2022-06-26 13:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(46,4,3,'2022-06-26 15:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(47,5,6,'2022-06-26 17:00:00',50,50,1);
INSERT INTO bus_schedule VALUES(48,6,5,'2022-06-26 19:00:00',50,50,1);
INSERT INTO notice_info VALUES(1,'班车取消通知','抱歉地通知您,原计划2022-06-19 13:00:00由长安校区发往友谊校区的班车因天气原因取消了','1',date('2022-06-10 12:00:00'),33);
INSERT INTO notice_info VALUES(2,'班车增加通知','为满足广大师生出行需求,拟定新增一班2022-06-19 13:00:00由长安校区发往友谊校区的班车','1',date('2022-06-11 12:00:00'),33);
INSERT INTO notice_info VALUES(3,'招聘校车队队员通知','因工作需求,现需招聘校车队队员2名。有相关工作经验者优先','1',date('2022-06-12 12:00:00'),33);
INSERT INTO notice_info VALUES(4,'通报批评','A同学与B同学在2022-06-19 11:00:00由长安校区发往友谊校区的班车打架斗殴,给予全校通报批评加留校察看处分','1',date('2022-06-14 12:00:00'),33);
INSERT INTO notice_info VALUES(5,'全校通报表扬','C同学2022-06-20 11:00:00由长安校区发往友谊校区的班车见义勇为,利用自己的知识救治突发心脏病的同学,现给予全校通报嘉奖表彰','1',date('2022-06-14 12:00:00'),33);
INSERT INTO question_info (title,A,B,C,D,answer)VALUES('在乘坐校车时，下列行为中哪个是符合安全规定的','携带易燃易爆等危险物品','和公交车驾驶人说笑干扰驾驶','爱护车内设备','将手伸到公交车外','C');
INSERT INTO question_info (title,A,B,C,D,answer)VALUES('预约班车后，以下行为正确的是','按时乘坐班车','不去乘坐班车也不取消预约','乘坐与预约班次不同的校车','刻意在临近发车时取消预约','A');
INSERT INTO question_info (title,A,B,C,D,answer)VALUES('发现乘车设备出现问题，以下做法错误的是的是','向工作人员汇报','通过网络渠道向管理人员进行反馈','辱骂工作人员，责备其工作态度','提醒同行乘客注意安全隐患','C');
INSERT INTO question_info (title,A,B,C,D,answer)VALUES('下列行为中，哪个是不文明的','按照线上排队顺序有序上车','未预约班车强行上车','在校车内遇到老年人、孕妇等特殊群体主动让座','列车行进过程中紧握扶手','B');
INSERT INTO question_info (title,A,B,C,D,answer)VALUES('乘车遇到交通事故被困时，以下哪种做法是错误的','大声呼救','使用安全锤破窗逃生','陷入慌张，大喊大叫','从紧急逃生窗脱险','C');
INSERT INTO question_info (title,A,B,C,D,answer)VALUES('以下哪种行为会降低自己的用户信用度','预约班车后无法及时乘坐的，及时取消预约','遇到其他乘客的不良行为及时制止','通过程序公告获取乘车信息','上车不刷卡，逃票','D');
INSERT INTO question_info (title,A,B,C,D,answer)VALUES('乘车时，为保证行李物品不丢失，以下做法正确的是','将行李随身携带','行李随便放置','将贵重物品放在显眼位置','将行李箱等行李轮子着地且不做任何固定','A');
INSERT INTO question_info (title,A,B,C,D,answer)VALUES('《中华人民共和国消防法》规定禁止非法携带（）乘坐公共交通工具','电子产品','食品','易燃易爆危险品','饮用水','C');
INSERT INTO question_info (title,A,B,C,D,answer)VALUES('疫情期间乘坐校车不应当','戴上口罩乘车','乘车出示健康码','上车后摘下口罩','与其他乘客保持一定距离','C');
INSERT INTO question_info (title,A,B,C,D,answer)VALUES('遇到以下哪种情况时，您的“瓜大易行”账号将被系统封禁','一次预约班车未到','乘车过程中由于不良行为被管理人员警告','信用值为0','没有原因','C');
INSERT INTO question_info (title,A,B,C,D,answer)VALUES('乘车时，下列行为最不安全的是','行车时扶好扶手','安静地坐在座位上','将手或身子置于车窗外','与同行乘客友好交谈','C');
INSERT INTO question_info (title,A,B,C,D,answer)VALUES('坐在行驶的车上，口渴了，以下最好的做法是','马上喝饮料','等下车后或车子停稳后再喝','让司机马上停车','向司机借水喝','B');
INSERT INTO question_info (title,A,B,C,D,answer)VALUES('乘车时正确的做法是','抽烟','打闹','安静地坐在自己的座位上','骚扰其他乘客','C');
INSERT INTO question_info (title,A,B,C,D,answer)VALUES('西北工业大学成立于哪一年','1928年','1938年','1948年','1958年','B');
INSERT INTO question_info (title,A,B,C,D,answer)VALUES('下列哪一项不是西北工业大学校徽代表的含义','航空','电子','航天','航海','B');
INSERT INTO question_info (title,A,B,C,D,answer)VALUES('下列选项哪个是西安著名的旅游景点','黄山','长城','九寨沟','大雁塔','D');
INSERT INTO question_info (title,A,B,C,D,answer)VALUES('西北工业大学校训不包含','勇','诚','仁','公','C');
INSERT INTO question_info (title,A,B,C,D,answer)VALUES('西安有着悠久的历史，也是中国历史上第一个被称为“京”的城市，西安在古代又被称为','京华','开封','盛京','西京','D');
INSERT INTO question_info (title,A,B,C,D,answer)VALUES('下列哪位两院院士来自西工大','茅以升','吴自良','魏寿昆','藤景光','B');
INSERT INTO question_info (title,A,B,C,D,answer)VALUES('西安是十三朝古都，下列不在西安建都的是','后秦','西魏','北魏','北周','C');
