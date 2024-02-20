rm -rf apps/*/{.blueprint-templates,.vscode}
for dir in apps/*/; do
  ln -s $PWD/{.blueprint-templates,.vscode} "$dir"
done