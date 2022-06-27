set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/PeterChennn/peter-coolblog.git master:gh-pages

cd -