pandoc \
    -o cover.pdf \
    -V "curdate:$(date '+%Y-%m-%d')" \
    -M link-citations=true \
    --pdf-engine xelatex \
    --listings \
    --highlight-style pygments \
    -Vlang=vi\
    3.md \
    