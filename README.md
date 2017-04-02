```
# rplacews.js

cd ~
wget "https://nodejs.org/dist/v6.10.1/node-v6.10.1-linux-x64.tar.xz"
tar -xvf node-v6.10.1-linux-x64.tar.xz
ln -s node-v6.10.1-linux-x64 node
cd /usr/local/bin
sudo ln -s ~/node/bin/node /usr/local/bin/node
sudo ln -s ~/node/bin/npm /usr/local/bin/npm
cd ~
git clone https://github.com/rBABYMETAL/rplacews.js
cd rplacews.js
npm install --save ws
npm install pm2 -g
sudo ln -s ~/node/lib/node_modules/pm2/bin/pm2 /usr/local/bin/pm2
pm2 install pm2-logrotate
sudo pm2 startup -u `whoami`
pm2 start follow_stream.js

```
