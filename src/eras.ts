type Era = {
  name: string,
  from: string,
}

const eras: Era[] = [
  { name: '令和', from: '2019-05-01' },
  { name: '平成', from: '1989-01-08' },
  { name: '昭和', from: '1926-12-25' },
  { name: '大正', from: '1912-07-30' },
  { name: '明治', from: '1868-09-08' },
  { name: '慶応', from: '1865-04-07' },
  { name: '元治', from: '1864-02-20' },
  { name: '文久', from: '1861-02-19' },
  { name: '万延', from: '1860-03-18' },
  { name: '安政', from: '1854-11-27' },
  { name: '嘉永', from: '1848-02-28' },
  { name: '弘化', from: '1844-12-02' },
  { name: '天保', from: '1830-12-10' },
  { name: '文政', from: '1818-04-22' },
  { name: '文化', from: '1804-02-11' },
  { name: '享和', from: '1801-02-05' },
  { name: '寛政', from: '1789-01-25' },
  { name: '天明', from: '1781-04-02' },
  { name: '安永', from: '1772-11-16' },
  { name: '明和', from: '1764-06-02' },
  { name: '宝暦', from: '1751-10-27' },
  { name: '寛延', from: '1748-07-12' },
  { name: '延享', from: '1744-02-21' },
  { name: '寛保', from: '1741-02-27' },
  { name: '元文', from: '1736-04-28' },
  { name: '享保', from: '1716-06-22' },
  { name: '正徳', from: '1711-04-25' },
  { name: '宝永', from: '1704-03-13' },
  { name: '元禄', from: '1688-09-30' },
  { name: '貞享', from: '1684-02-21' },
  { name: '天和', from: '1681-09-29' },
  { name: '延宝', from: '1673-09-21' },
  { name: '寛文', from: '1661-04-25' },
  { name: '万治', from: '1658-07-23' },
  { name: '明暦', from: '1655-04-13' },
  { name: '承応', from: '1652-09-18' },
  { name: '慶安', from: '1648-02-15' },
  { name: '正保', from: '1644-12-16' },
  { name: '寛永', from: '1624-02-30' },
  { name: '元和', from: '1615-07-13' },
  { name: '慶長', from: '1596-10-27' },
  { name: '文禄', from: '1592-12-08' },
  { name: '天正', from: '1573-07-28' },
  { name: '元亀', from: '1570-04-23' },
  { name: '永禄', from: '1558-02-28' },
  { name: '弘治', from: '1555-10-23' },
  { name: '天文', from: '1532-07-29' },
  { name: '享禄', from: '1528-08-20' },
  { name: '大永', from: '1521-08-23' },
  { name: '永正', from: '1504-02-30' },
  { name: '文亀', from: '1501-02-29' },
  { name: '明応', from: '1492-07-19' },
  { name: '延徳', from: '1489-08-21' },
  { name: '長享', from: '1487-07-20' },
  { name: '文明', from: '1469-04-28' },
  { name: '応仁', from: '1467-03-05' },
  { name: '文正', from: '1466-02-28' },
  { name: '寛正', from: '1460-12-21' },
  { name: '長禄', from: '1457-09-28' },
  { name: '康正', from: '1455-07-25' },
  { name: '享徳', from: '1452-07-25' },
  { name: '宝徳', from: '1449-07-28' },
  { name: '文安', from: '1444-02-05' },
  { name: '嘉吉', from: '1441-02-17' },
  { name: '永享', from: '1429-09-05' },
  { name: '正長', from: '1428-04-27' },
  { name: '応永', from: '1394-07-05' },
  { name: '明徳', from: '1390-03-26' },
  { name: '元中', from: '1384-04-28' },
  { name: '弘和', from: '1381-02-10' },
  { name: '天授', from: '1375-05-27' },
  { name: '文中', from: '1372-04-？' },
  { name: '建徳', from: '1370-07-24' },
  { name: '正平', from: '1346-12-08' },
  { name: '興国', from: '1340-04-28' },
  { name: '延元', from: '1336-02-29' },
  { name: '建武', from: '1334-01-29' },
  { name: '元弘', from: '1331-08-09' },
  { name: '元徳', from: '1329-08-29' },
  { name: '嘉暦', from: '1326-04-26' },
  { name: '正中', from: '1324-12-09' },
  { name: '元亨', from: '1321-02-23' },
  { name: '元応', from: '1319-04-28' },
  { name: '文保', from: '1317-02-03' },
  { name: '正和', from: '1312-03-20' },
  { name: '応長', from: '1311-04-28' },
  { name: '延慶', from: '1308-10-09' },
  { name: '徳治', from: '1306-12-14' },
  { name: '嘉元', from: '1303-08-05' },
  { name: '乾元', from: '1302-11-21' },
  { name: '正安', from: '1299-04-25' },
  { name: '永仁', from: '1293-08-05' },
  { name: '正応', from: '1288-04-28' },
  { name: '弘安', from: '1278-02-29' },
  { name: '建治', from: '1275-04-25' },
  { name: '文永', from: '1264-02-28' },
  { name: '弘長', from: '1261-02-20' },
  { name: '文応', from: '1260-04-13' },
  { name: '正元', from: '1259-03-26' },
  { name: '正嘉', from: '1257-03-14' },
  { name: '康元', from: '1256-10-05' },
  { name: '建長', from: '1249-03-18' },
  { name: '宝治', from: '1247-02-28' },
  { name: '寛元', from: '1243-02-26' },
  { name: '仁治', from: '1240-07-16' },
  { name: '延応', from: '1239-02-07' },
  { name: '暦仁', from: '1238-11-23' },
  { name: '嘉禎', from: '1235-09-19' },
  { name: '文暦', from: '1234-11-05' },
  { name: '天福', from: '1233-04-15' },
  { name: '貞永', from: '1232-04-02' },
  { name: '寛喜', from: '1229-03-05' },
  { name: '安貞', from: '1227-12-10' },
  { name: '嘉禄', from: '1225-04-20' },
  { name: '元仁', from: '1224-11-20' },
  { name: '貞応', from: '1222-04-13' },
  { name: '承久', from: '1219-04-12' },
  { name: '建保', from: '1213-12-06' },
  { name: '建暦', from: '1211-03-09' },
  { name: '承元', from: '1207-10-25' },
  { name: '建永', from: '1206-04-27' },
  { name: '元久', from: '1204-02-20' },
  { name: '建仁', from: '1201-02-13' },
  { name: '正治', from: '1199-04-27' },
  { name: '建久', from: '1190-04-11' },
  { name: '文治', from: '1185-08-14' },
  { name: '元暦', from: '1184-04-16' },
  { name: '寿永', from: '1182-05-27' },
  { name: '養和', from: '1181-07-14' },
  { name: '治承', from: '1177-08-04' },
  { name: '安元', from: '1175-07-28' },
  { name: '承安', from: '1171-04-21' },
  { name: '嘉応', from: '1169-04-08' },
  { name: '仁安', from: '1166-08-27' },
  { name: '永万', from: '1165-06-05' },
  { name: '長寛', from: '1163-03-29' },
  { name: '応保', from: '1161-09-04' },
  { name: '永暦', from: '1160-01-10' },
  { name: '平治', from: '1159-04-20' },
  { name: '保元', from: '1156-04-27' },
  { name: '久寿', from: '1154-10-28' },
  { name: '仁平', from: '1151-01-26' },
  { name: '久安', from: '1145-07-22' },
  { name: '天養', from: '1144-02-23' },
  { name: '康治', from: '1142-04-28' },
  { name: '永治', from: '1141-07-10' },
  { name: '保延', from: '1135-04-27' },
  { name: '長承', from: '1132-08-11' },
  { name: '天承', from: '1131-01-29' },
  { name: '大治', from: '1126-01-22' },
  { name: '天治', from: '1124-04-03' },
  { name: '保安', from: '1120-04-10' },
  { name: '元永', from: '1118-04-03' },
  { name: '永久', from: '1113-07-13' },
  { name: '天永', from: '1110-07-13' },
  { name: '天仁', from: '1108-08-03' },
  { name: '嘉承', from: '1106-04-09' },
  { name: '長治', from: '1104-02-10' },
  { name: '康和', from: '1099-08-28' },
  { name: '承徳', from: '1097-11-21' },
  { name: '永長', from: '1096-12-17' },
  { name: '嘉保', from: '1094-12-15' },
  { name: '寛治', from: '1087-04-07' },
  { name: '応徳', from: '1084-02-07' },
  { name: '永保', from: '1081-02-10' },
  { name: '承暦', from: '1077-11-17' },
  { name: '承保', from: '1074-08-23' },
  { name: '延久', from: '1069-04-13' },
  { name: '治暦', from: '1065-08-02' },
  { name: '康平', from: '1058-08-29' },
  { name: '天喜', from: '1053-01-11' },
  { name: '永承', from: '1046-04-14' },
  { name: '寛徳', from: '1044-11-24' },
  { name: '長久', from: '1040-11-10' },
  { name: '長暦', from: '1037-04-21' },
  { name: '長元', from: '1028-07-25' },
  { name: '万寿', from: '1024-07-13' },
  { name: '治安', from: '1021-02-02' },
  { name: '寛仁', from: '1017-04-23' },
  { name: '長和', from: '1012-12-25' },
  { name: '寛弘', from: '1004-07-20' },
  { name: '長保', from: '999-01-13' },
  { name: '長徳', from: '995-02-22' },
  { name: '正暦', from: '990-11-07' },
  { name: '永祚', from: '989-08-08' },
  { name: '永延', from: '987-04-05' },
  { name: '寛和', from: '985-04-27' },
  { name: '永観', from: '983-04-15' },
  { name: '天元', from: '978-11-29' },
  { name: '貞元', from: '976-07-13' },
  { name: '天延', from: '973-12-20' },
  { name: '天禄', from: '970-03-25' },
  { name: '安和', from: '968-08-13' },
  { name: '康保', from: '964-07-10' },
  { name: '応和', from: '961-02-16' },
  { name: '天徳', from: '957-10-27' },
  { name: '天暦', from: '947-04-22' },
  { name: '天慶', from: '938-05-22' },
  { name: '承平', from: '931-04-26' },
  { name: '延長', from: '923-閏4-11' },
  { name: '延喜', from: '901-07-15' },
  { name: '昌泰', from: '898-04-26' },
  { name: '寛平', from: '889-04-27' },
  { name: '仁和', from: '885-02-21' },
  { name: '元慶', from: '877-04-16' },
  { name: '貞観', from: '859-04-15' },
  { name: '天安', from: '857-02-21' },
  { name: '斎衡', from: '854-11-30' },
  { name: '仁寿', from: '851-04-28' },
  { name: '嘉祥', from: '848-06-13' },
  { name: '承和', from: '834-01-03' },
  { name: '天長', from: '824-01-05' },
  { name: '弘仁', from: '810-09-19' },
  { name: '大同', from: '806-05-18' },
  { name: '延暦', from: '782-08-19' },
  { name: '天応', from: '781-01-01' },
  { name: '宝亀', from: '770-10-01' },
  { name: '神護景雲', from: '767-08-16' },
  { name: '天平神護', from: '765-01-07' },
  { name: '天平宝字', from: '757-08-18' },
  { name: '天平勝宝', from: '749-07-02' },
  { name: '天平感宝', from: '749-04-14' },
  { name: '天平', from: '729-08-05' },
  { name: '神亀', from: '724-02-04' },
  { name: '養老', from: '717-11-17' },
  { name: '霊亀', from: '715-09-02' },
  { name: '和銅', from: '708-01-11' },
  { name: '慶雲', from: '704-05-10' },
  { name: '大宝', from: '701-03-21' },
  { name: '朱鳥', from: '686-07-20' },
  { name: '白雉', from: '650-02-15' },
  { name: '大化', from: '645-06-19' },
]

export default eras
