import csv
import os
import random

from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time

print("启动中，请等待...")
options = Options()
options.add_experimental_option("debuggerAddress", "127.0.0.1:9222")
driver = webdriver.Chrome(r"./chromedriver_win64/chromedriver.exe", options=options)
print("启动完成")
driver.set_page_load_timeout(5)
# xhs首页
url = "https://www.xiaohongshu.com"

filePath = '笔记链接/'
files = os.listdir(filePath)
print(files)

for file in files:

    xhs_bz = file
    links = []
    with open('笔记链接/' + xhs_bz, "r", encoding='utf8') as f:  # 打开文件
        lines = csv.reader(f)
        next(lines)
        for line in lines:
            links.append(line)

    fp = open('笔记详细信息/' + xhs_bz, "w+", encoding='utf8', newline='')
    write = csv.writer(fp)
    write.writerow(['笔记链接','标题','喜欢数','收藏数','评论数','评论时间','评论地点','视频时长'])

    for i in range(len(links)):

        print(len(links),i)

        url = links[i][0]
        driver.get(url)
        res = driver.page_source

        soup = BeautifulSoup(res, "html.parser")

        count = []
        for item in soup.find_all('span', class_="count"):
            item = str(item).replace('\n', '')
            count.append(item.split('="">')[1].replace('</span>',''))
        count = count[-3:]

        date_loc = []
        for item in soup.find_all('span', class_="date"):
            item = str(item).replace('\n', '')
            date_loc = item.split('="">')[1].replace('</span>','').split(' ')

        time_long = ''
        for item in soup.find_all('xg-time', class_="xgplayer-time"):
            item = str(item).replace('\n', '')
            time_long = item.split('</span><span>')[1].replace('</span></xg-time>','')

        title = ''
        for item in soup.find_all('div', class_="title"):
            item = str(item).replace('\n', '')
            if 'detail-title' in item:
                title = item.split('id="detail-title">')[1].replace('</div>','')

        write.writerow([url,title] + count + date_loc + [time_long])

        print([url,title] + count + date_loc + [time_long])
        time.sleep(0.5 + 0.5*random.random())