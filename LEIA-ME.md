# Portfólio — Catarina Rocha

## Ver o site no computador
No Terminal:

    cd "/Users/catarinarocha/Desktop/PORTFÓLIO/PortfolioCodigo"
    python3 servidor.py

Mostra dois endereços: um para o computador e outro para abrires no telemóvel
(tem de estar na mesma rede Wi-Fi). Para parar: Control + C.

## Editar conteúdo
Está quase tudo em `script.js`, na lista `PROJETOS` no topo do ficheiro:
títulos, anos, descrições, links e a lista de imagens/vídeos de cada projeto.

A bio e o email estão no `index.html`, na secção do pop-up "Sobre".

## Regras importantes
- Se mudares o nome de um ficheiro em `media/`, tens de mudar também o `src:`
  no `script.js`, senão deixa de aparecer no site.
- Exporta os vídeos em **H.264** (não HEVC/H.265 — o Firefox não o lê).
- Exporta imagens em **JPEG** a sério. Mudar a extensão de um PNG ou PDF
  para .jpg no Finder não converte nada e o browser não as mostra.
- Se trocares o vídeo da landing, gera um `poster` novo e sobe o `?v=`
  nas duas linhas do `index.html`.

## Publicar no GitHub Pages

O site vai ficar em **https://catarinadsrocha.github.io**

1. No GitHub, cria um repositório com o nome **exato**:
   `catarinadsrocha.github.io`
   (tem de ser igual ao teu nome de utilizador + .github.io, senão o endereço
   fica diferente e as imagens de partilha deixam de funcionar)
   Deixa-o **público** e não marques "Add a README".

2. No Terminal, dentro desta pasta:

       cd "/Users/catarinarocha/Desktop/PORTFÓLIO/PortfolioCodigo"
       git init
       git add .
       git commit -m "Portfolio"
       git branch -M main
       git remote add origin https://github.com/catarinadsrocha/catarinadsrocha.github.io.git
       git push -u origin main

3. No GitHub: Settings > Pages > Source: "Deploy from a branch" > main > / (root).
   Ao fim de 1-2 minutos o site está no ar.

O `.gitignore` já trata de excluir o que não deve ir (`media/_originais/`,
`media/_nao-usados/`, `servidor.py`, `.DS_Store`). Vão ~310 MB.

### Sempre que fizeres alterações

    git add .
    git commit -m "o que mudaste"
    git push

### Se mudares de endereço
Trocar as duas linhas `og:url` e `og:image` no `index.html` — são o que faz
aparecer a imagem quando partilhas o link.
