import axios from "axios";
// CHAVE DE ACESSO A API
// será recebido depois de acessar o login
export const apiKey = "8c4b9c259a7ff3b6a1eba387b6b7faff";
export const language = "pt-BR";


export async function movieActorsPath(id, apiKey) {
   console.log("|movieActorsPath > INICIADO ")
   const data = await axios.get("http://api.themoviedb.org/3/movie/" + id + "/credits?api_key=" + apiKey)
   return data.data
}
export async function movieRecomendationsPath(id, apiKey) {
   console.log("|movieRecomendationsPath > INICIADO ")
   const data = await axios.get("http://api.themoviedb.org/3/movie/" + id + "/recommendations?api_key=" + apiKey + "&language=" + language + "&page=1")
   console.log(data)
   return data.data
}

export function movieDetailsFullPath(id, apiKey, language) {
   return "http://api.themoviedb.org/3/movie/" + id + "?api_key=" + apiKey + "&language=" + language + "&append_to_response=videos,images";

}

// https://api.themoviedb.org/3/movie/436969/8c4b9c259a7ff3b6a1eba387b6b7faff

///FUNCIONAL/////////////////////////////////////////////////////////////////////
// (FORMULA)
// em um valor padrão de 100k de pessoas assistindo
// quero receber as HomeNowPlayingQtd os 5 primeiros filmes
// ou até a soma dos anteriores até 5º completar a
// quantidade de 100k de pessoas assistindo.
// [podendo mudar o texto da pagina de destaque para muitos assistidos quando tiver 2 ou somente 1 filme as 100k pessoas assistindo]
// esses 100k de pessoas pode ser a média diária dos ultimos X dias,
// semanas ou meses(periodo). podendo ser flexivel no seu periodo e quantidade de pessoas.
//
export const HomeNowPlayingQtd = 5

///FUNCIONAL/////////////////////////////////////////////////////////////////////
// Passa todas as informações do filme por props
// para fazer o calculo do filme
// ex: promoção de 10% em filmes do genero de terror.
// pegaria da props do filme na categoria e adicionaria um desconto
// para quem fosse do genero de terror.
//
export function moviePrice(movie) {
   // console.log("MOVIE", movie)
   // melhorias > a const "genre" tem todos os generos com seus respectivos descontos, tirar do SWITCH CASE e colocar apartir da const.
   const valueBase = movie.vote_average * 1;
   const allGenres = !!movie.genre_ids ? movie.genre_ids : !!movie.genre ? movie.genre : []
   const discountAll = 0.35; // desconto geral para todos os filmes

   // desconto para um genero especifico do genero
   function genreMovieDiscount(genreIds) {
      const genres = genreIds;

      let totalDiscountPerGenres = {};
      // console.log(genres)
      let totalDiscount = 0;

      // verifica todos os codigos do genero que tem desconto
      for (let g = 0; g < genres.length; g++) {
         switch (genres[g]) {
            case 28:
               totalDiscount = 0.25 + totalDiscount;
               totalDiscountPerGenres["n_28"] = 0.25;
               break;
            case 12:
               totalDiscount = 0.30 + totalDiscount;
               totalDiscountPerGenres["n_12"] = 0.30;
               break;
            case 34:
               totalDiscount = 0.80 + totalDiscount;
               totalDiscountPerGenres["n_34"] = 0.80;
               break;
            default:
               break;
         }
         // console.log("totalDiscount", totalDiscount)
         // console.log("totalDiscountPerGenres",totalDiscountPerGenres)
      }
      return { "totalDiscount": totalDiscount, "totalDiscountPerGenres": totalDiscountPerGenres }
   }
   const discountMovieGenre = genreMovieDiscount(allGenres);

   // Ternário para nenhum filme ficar com o valor negativo, caseo o seu genero tenha algum desconto grande.
   const totalValue = (valueBase - (discountMovieGenre.totalDiscount + discountAll)).toFixed(2) < 0 ? 0 : (valueBase - (discountMovieGenre.totalDiscount + discountAll)).toFixed(2);

   return totalValue;
}









// axios.get('https://randomuser.me/api/?page=1&results=10&nat=us')





////////////////////////////////////////////////////////////////////////
// Aqui contem todos os gêneros dos filmes e seus codigos.
// Aqui também tem os descontos no valor do filme pelo seu gênero.
// (até fazer uma config só para os descontos aqui estará os descontos por gênero)
//
export const genre =
{
   "genres": [
      {
         "id": 28,
         "name": "Ação"
      },
      {
         "id": 12,
         "name": "Aventura"
      },
      {
         "id": 16,
         "name": "Animação"
      },
      {
         "id": 35,
         "name": "Comédia"
      },
      {
         "id": 80,
         "name": "Crime"
      },
      {
         "id": 99,
         "name": "Documentário"
      },
      {
         "id": 18,
         "name": "Drama"
      },
      {
         "id": 10751,
         "name": "Família"
      },
      {
         "id": 14,
         "name": "Fantasia"
      },
      {
         "id": 36,
         "name": "História"
      },
      {
         "id": 27,
         "name": "Terror"
      },
      {
         "id": 10402,
         "name": "Música"
      },
      {
         "id": 9648,
         "name": "Mistério"
      },
      {
         "id": 10749,
         "name": "Romance"
      },
      {
         "id": 878,
         "name": "Ficção científica"
      },
      {
         "id": 10770,
         "name": "Cinema TV"
      },
      {
         "id": 53,
         "name": "Thriller"
      },
      {
         "id": 10752,
         "name": "Guerra"
      },
      {
         "id": 37,
         "name": "Faroeste"
      }
   ],
   "genresDiscount":
   {
      "28": 0.25,
      "12": 0.50,
      "16": 0,
      "35": 0,
      "80": 0,
      "99": 0,
      "18": 18,
      "10751": 10751,
      "14": 14,
      "36": 36,
      "27": 27,
      "10402": 10402,
      "9648": 9648,
      "10749": 10749,
      "878": 878,
      "10770": 10770,
      "53": 53,
      "10752": 10752,
      "37": 37,
   }
}

export const certification = {
   "BR": [
      {
         "certification": "12",
         "meaning": "Not recommended for minors under twelve. Scenes can include physical aggression, use of legal drugs and sexual innuendo.",
         "order": 3
      },
      {
         "certification": "14",
         "meaning": "Not recommended for minors under fourteen. More violent material, stronger sex references and/or nudity.",
         "order": 4
      },
      {
         "certification": "10",
         "meaning": "Not recommended for minors under ten. Violent content or inappropriate language to children, even if of a less intensity.",
         "order": 2
      },
      {
         "certification": "18",
         "meaning": "Not recommended for minors under eighteen. Scenes featuring explicit sex, incest, pedophilia, praising of the use of illegal drugs and violence of a strong imagery impact.",
         "order": 6
      },
      {
         "certification": "L",
         "meaning": "General Audiences. Do not expose children to potentially harmful content.",
         "order": 1
      },
      {
         "certification": "16",
         "meaning": "Not recommended for minors under sixteen. Scenes featuring production, trafficking and/or use of illegal drugs, hyper-realistic sex, sexual violence, abortion, torture, mutilation, suicide, trivialization of violence and death penalty.",
         "order": 5
      }
   ],
}

// excluir
export const filme = {
   "adult": false,
   "backdrop_path": "/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
   "belongs_to_collection": {
      "id": 861415,
      "name": "Free Guy Collection",
      "poster_path": null,
      "backdrop_path": null
   },
   "budget": 110000000,
   "genres": [
      {
         "id": 35,
         "name": "Comédia"
      },
      {
         "id": 28,
         "name": "Ação"
      },
      {
         "id": 12,
         "name": "Aventura"
      },
      {
         "id": 878,
         "name": "Ficção científica"
      }
   ],
   "homepage": "https://www.20thcenturystudios.com/movies/free-guy",
   "id": 550988,
   "imdb_id": "tt6264654",
   "original_language": "en",
   "original_title": "Free Guy",
   "overview": "Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um brutalmente realista vídeo game de mundo aberto. Agora ele precisa aceitar sua realidade e lidar com o fato de que é o único que pode salvar o mundo.",
   "popularity": 1410.562,
   "poster_path": "/zEAl0w90NxNcXtFPlHyivFlZkbt.jpg",
   "production_companies": [
      {
         "id": 27711,
         "logo_path": "/3e294jszfE6cE8TOogmj0zNd6pL.png",
         "name": "Berlanti Productions",
         "origin_country": "US"
      },
      {
         "id": 2575,
         "logo_path": "/9YJrHYlcfHtwtulkFMAies3aFEl.png",
         "name": "21 Laps Entertainment",
         "origin_country": "US"
      },
      {
         "id": 104228,
         "logo_path": null,
         "name": "Maximum Effort",
         "origin_country": "US"
      },
      {
         "id": 125000,
         "logo_path": null,
         "name": "Lit Entertainment Group",
         "origin_country": "US"
      }
   ],
   "production_countries": [
      {
         "iso_3166_1": "US",
         "name": "United States of America"
      }
   ],
   "release_date": "2021-08-11",
   "revenue": 302000000,
   "runtime": 115,
   "spoken_languages": [
      {
         "english_name": "English",
         "iso_639_1": "en",
         "name": "English"
      }
   ],
   "status": "Released",
   "tagline": "A vida é muito curta para ser um personagem secundário.",
   "title": "Free Guy: Assumindo o Controle",
   "video": false,
   "vote_average": 7.8,
   "vote_count": 837
}
export const movies =
{
   "page": 1,
   "results": [
      {
         "adult": false,
         "backdrop_path": "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
         "genre_ids": [
            28,
            12,
            14,
            35
         ],
         "id": 436969,
         "original_language": "en",
         "original_title": "The Suicide Squad",
         "overview": "Os supervilões Harley Quinn, Bloodsport, Peacemaker e uma coleção de malucos condenados da prisão de Belle Reve juntam-se à super-secreta e super-obscura Força Tarefa X, enquanto são deixados na remota ilha de Corto Maltese para combater o inimigo.",
         "popularity": 2002.161,
         "poster_path": "/wTS3dS2DJiMFFgqKDz5fxMTri.jpg",
         "release_date": "2021-07-28",
         "title": "O Esquadrão Suicida",
         "video": false,
         "vote_average": 7.9,
         "vote_count": 4032
      },
      {
         "adult": false,
         "backdrop_path": "/uizrxdqIl1a4c9UIhSdPM3o6u0f.jpg",
         "genre_ids": [
            28,
            12,
            14
         ],
         "id": 566525,
         "original_language": "en",
         "original_title": "Shang-Chi and the Legend of the Ten Rings",
         "overview": "Shang-Chi precisa confrontar o passado que pensou ter deixado para trás. Ao mesmo tempo, ele é envolvido em uma teia de mistérios da organização conhecida como Dez Anéis.",
         "popularity": 1719.819,
         "poster_path": "/6T0r3jBs0xbmzVnM9u7e3vUXMYk.jpg",
         "release_date": "2021-09-01",
         "title": "Shang-Chi e a Lenda dos Dez Anéis",
         "video": false,
         "vote_average": 7.9,
         "vote_count": 1015
      },
      {
         "adult": false,
         "backdrop_path": "/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
         "genre_ids": [
            35,
            28,
            12,
            878
         ],
         "id": 550988,
         "original_language": "en",
         "original_title": "Free Guy",
         "overview": "Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um brutalmente realista vídeo game de mundo aberto. Agora ele precisa aceitar sua realidade e lidar com o fato de que é o único que pode salvar o mundo.",
         "popularity": 1410.562,
         "poster_path": "/zEAl0w90NxNcXtFPlHyivFlZkbt.jpg",
         "release_date": "2021-08-11",
         "title": "Free Guy: Assumindo o Controle",
         "video": false,
         "vote_average": 7.8,
         "vote_count": 828
      },
      {
         "adult": false,
         "backdrop_path": "/7WJjFviFBffEJvkAms4uWwbcVUk.jpg",
         "genre_ids": [
            12,
            14,
            35,
            28
         ],
         "id": 451048,
         "original_language": "en",
         "original_title": "Jungle Cruise",
         "overview": "O destemido capitão Frank Wolff e a intrépida pesquisadora Lily Houghton se aventuram pela Amazônia a bordo da peculiar embarcação La Quila. Determinados a encontrar uma árvore cujos poderes de cura podem mudar o futuro da medicina, nem mesmo as águas perigosas e as forças sobrenaturais que enfrentam pelo caminho poderão detê-los. Mas os riscos aumentam ainda mais conforme os segredos da árvore se revelam, o destino de Lily e Frank e também de toda a humanidade está em jogo.",
         "popularity": 1355.855,
         "poster_path": "/9E76j2DcQv8LdbX1Wa9jpbDBfw1.jpg",
         "release_date": "2021-07-28",
         "title": "Jungle Cruise",
         "video": false,
         "vote_average": 7.9,
         "vote_count": 2689
      },
      {
         "adult": false,
         "backdrop_path": "/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg",
         "genre_ids": [
            28,
            12,
            53,
            878
         ],
         "id": 497698,
         "original_language": "en",
         "original_title": "Black Widow",
         "overview": "Natasha Romanoff, também conhecida como Viúva Negra, confronta o lado mais sombrio de sua história quando surge uma perigosa conspiração ligada ao seu passado. Perseguida por uma força implacável disposta a tudo para destruí-la, Natasha precisa agora lidar com seu passado como espiã e com as relações que deixou para trás muito antes de se tornar uma Vingadora.",
         "popularity": 1302.136,
         "poster_path": "/rKq1Vlw0Bqe2EEvdmIkkkgPQAGf.jpg",
         "release_date": "2021-07-07",
         "title": "Viúva Negra",
         "video": false,
         "vote_average": 7.7,
         "vote_count": 5112
      },
      {
         "adult": false,
         "backdrop_path": "/mtRW6eAwOO27h3zrfU2foQFW7Hg.jpg",
         "genre_ids": [
            16,
            10751,
            12,
            35
         ],
         "id": 675445,
         "original_language": "en",
         "original_title": "PAW Patrol: The Movie",
         "overview": "O longa acompanha um grupo de cães falantes que utilizam equipamentos especializados para investigar e resolver crimes, evitando desastres na pequena cidade onde moram.",
         "popularity": 1172.36,
         "poster_path": "/cl3JWmv9HbSx43TDsYyUkABKV3M.jpg",
         "release_date": "2021-08-09",
         "title": "Patrulha Canina: O Filme",
         "video": false,
         "vote_average": 7.9,
         "vote_count": 465
      },
      {
         "adult": false,
         "backdrop_path": "/akwg1s7hV5ljeSYFfkw7hTHjVqk.jpg",
         "genre_ids": [
            16,
            35,
            12,
            10751
         ],
         "id": 459151,
         "original_language": "en",
         "original_title": "The Boss Baby: Family Business",
         "overview": "Tim Templeton e seu irmão mais novo Ted, o famoso Boss Baby, tornaram-se adultos, vivem por conta própria, Tim se tornou um homem de família organizado e Ted é o chefe de um grande fundo especulativo. Mas a chegada de um novo Boss Baby, com uma abordagem totalmente nova e estratégia inovadora, está prestes a unir os irmãos inimigos ... e inspirar um novo modelo nos assuntos familiares.  Tim e sua esposa Carole moram no subúrbio, onde ele cuida da casa enquanto ela cozinha a panela. Eles têm dois filhos: Tabitha, uma menina de 7 anos extremamente inteligente, e Tina, sua adorável recém-nascida. Tabitha, a primeira da classe em uma escola para superdotados, adora o tio Ted e sonha em seguir seus passos, o que preocupa muito Tim, que teme perder a infância por trabalhar tanto.",
         "popularity": 1111.03,
         "poster_path": "/olnWkuNwCDHPYTkLKktUnFLyHFg.jpg",
         "release_date": "2021-07-01",
         "title": "O Poderoso Chefinho 2: Negócios da Família",
         "video": false,
         "vote_average": 7.8,
         "vote_count": 1407
      },
      {
         "adult": false,
         "backdrop_path": "/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg",
         "genre_ids": [
            28,
            878,
            12
         ],
         "id": 588228,
         "original_language": "en",
         "original_title": "The Tomorrow War",
         "overview": "Em 2051, a humanidade está perdendo uma guerra global contra uma espécie mortal de alienígenas. Para garantir a sobrevivência dos humanos, soldados e civis do presente são transportados para o futuro e se juntam à luta, entre eles Dan Forester, um pai de família determinado a salvar o mundo para sua filha.",
         "popularity": 888.17,
         "poster_path": "/lWQ3hI78Az2RHfzDpEuvougqUz7.jpg",
         "release_date": "2021-07-02",
         "title": "A Guerra do Amanhã",
         "video": false,
         "vote_average": 8.1,
         "vote_count": 4157
      },
      {
         "adult": false,
         "backdrop_path": "/lzLzKXq2C0kL5Pu7VW5sNl5KV6L.jpg",
         "genre_ids": [
            28,
            12,
            80,
            18,
            53,
            9648
         ],
         "id": 597433,
         "original_language": "en",
         "original_title": "Beckett",
         "overview": "Depois de um trágico acidente de carro na Grécia, o turista americano Beckett se envolve em uma perigosa conspiração política e precisa lutar para salvar a própria vida.",
         "popularity": 720.603,
         "poster_path": "/fBJducGBcmrcIOQdhm4BUBNDiMu.jpg",
         "release_date": "2021-08-04",
         "title": "Beckett",
         "video": false,
         "vote_average": 6.4,
         "vote_count": 328
      },
      {
         "adult": false,
         "backdrop_path": "/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg",
         "genre_ids": [
            16,
            28,
            12,
            14
         ],
         "id": 635302,
         "original_language": "ja",
         "original_title": "劇場版「鬼滅の刃」無限列車編",
         "overview": "Tanjiro Kamado, junto com Inosuke Hashibira, um garoto criado por javalis que usa uma cabeça de javali, e Zenitsu Agatsuma, um garoto assustado que revela seu verdadeiro poder quando dorme, embarca no Trem Infinito em uma nova missão com o Hashira de Fogo, Kyojuro Rengoku, para derrotar um demônio que tem atormentado o povo e matado os caçadores de oni que se opõem a ele!",
         "popularity": 735.388,
         "poster_path": "/yaX5hliSF1rwZ9WVNbUchndjFSb.jpg",
         "release_date": "2020-10-16",
         "title": "Demon Slayer - Mugen Train: O Filme",
         "video": false,
         "vote_average": 8.4,
         "vote_count": 1658
      },
      {
         "adult": false,
         "backdrop_path": "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
         "genre_ids": [
            28,
            14,
            12
         ],
         "id": 460465,
         "original_language": "en",
         "original_title": "Mortal Kombat",
         "overview": "O lutador de MMA Cole Young deve treinar para liberar seu verdadeiro poder para unir-se aos maiores campeões mundiais contra inimigos da Exoterra em uma batalha decisiva pelo universo.",
         "popularity": 655.138,
         "poster_path": "/ijvC2w2yANsfgLT3LMu2zFr0fxh.jpg",
         "release_date": "2021-04-07",
         "title": "Mortal Kombat",
         "video": false,
         "vote_average": 7.4,
         "vote_count": 3792
      },
      {
         "adult": false,
         "backdrop_path": "/iJ2HVOZT9Kjayrhy21pbGIJs9ey.jpg",
         "genre_ids": [
            28,
            12,
            14
         ],
         "id": 525660,
         "original_language": "cn",
         "original_title": "真·三国无双",
         "overview": "Senhores da guerra, guerreiros e estadistas batalham pela supremacia neste conto de fantasia baseado nos jogos de sucesso e no Romance dos Três Reinos.",
         "popularity": 522.588,
         "poster_path": "/tZ5XIM5wGCRV3InRkE772qsHgqF.jpg",
         "release_date": "2021-04-29",
         "title": "Dynasty Warriors",
         "video": false,
         "vote_average": 6.7,
         "vote_count": 66
      },
      {
         "adult": false,
         "backdrop_path": "/dIibeeq4QMay5bTJ2vjr72IFFRo.jpg",
         "genre_ids": [
            14,
            12,
            35
         ],
         "id": 589754,
         "original_language": "ru",
         "original_title": "Последний богатырь: Корень зла",
         "overview": "",
         "popularity": 569.198,
         "poster_path": "/14l5EFPdqZ8Pzpp3yXO3BnTnpQh.jpg",
         "release_date": "2021-01-01",
         "title": "Последний богатырь: Корень зла",
         "video": false,
         "vote_average": 7.6,
         "vote_count": 28
      },
      {
         "adult": false,
         "backdrop_path": "/aO9Nnv9GdwiPdkNO79TISlQ5bbG.jpg",
         "genre_ids": [
            28,
            12
         ],
         "id": 568620,
         "original_language": "en",
         "original_title": "Snake Eyes: G.I. Joe Origins",
         "overview": "Depois de salvar a vida de seu herdeiro aparente, o tenaz solitário Snake Eyes é recebido em um antigo clã japonês chamado Arashikage, onde aprende os caminhos do guerreiro ninja. Mas, quando os segredos de seu passado forem revelados, a honra e a lealdade de Snake Eyes serão testadas - mesmo que isso signifique perder a confiança das pessoas mais próximas a ele.",
         "popularity": 770.129,
         "poster_path": "/guNi35hxy3b2okfFhKRIf42Hz1u.jpg",
         "release_date": "2021-07-22",
         "title": "G.I. Joe Origens: Snake Eyes",
         "video": false,
         "vote_average": 7,
         "vote_count": 467
      },
      {
         "adult": false,
         "backdrop_path": "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
         "genre_ids": [
            28,
            12,
            14
         ],
         "id": 399566,
         "original_language": "en",
         "original_title": "Godzilla vs. Kong",
         "overview": "Em uma época em que os monstros andam na Terra, a luta da humanidade por seu futuro coloca Godzilla e Kong em rota de colisão que verá as duas forças mais poderosas da natureza no planeta se confrontarem em uma batalha espetacular para as idades. Enquanto Monarch embarca em uma missão perigosa em terreno desconhecido e descobre pistas sobre as origens dos Titãs, uma conspiração humana ameaça tirar as criaturas, boas e más, da face da terra para sempre.",
         "popularity": 548.965,
         "poster_path": "/wllzjZxg4ynlAm5xmOICJ2uHOPJ.jpg",
         "release_date": "2021-03-24",
         "title": "Godzilla vs. Kong",
         "video": false,
         "vote_average": 7.9,
         "vote_count": 6970
      },
      {
         "adult": false,
         "backdrop_path": "/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
         "genre_ids": [
            28,
            12,
            14,
            878
         ],
         "id": 791373,
         "original_language": "en",
         "original_title": "Zack Snyder's Justice League",
         "overview": "Determinado a garantir que o sacrifício final do Superman não foi em vão, Bruce Wayne alinha forças com Diana Prince com planos de recrutar uma equipe de metahumanos para proteger o mundo de uma ameaça de proporções catastróficas que se aproxima.",
         "popularity": 472.786,
         "poster_path": "/ArWn6gCi61b3b3hclD2L0LOk66k.jpg",
         "release_date": "2021-03-18",
         "title": "Liga da Justiça de Zack Snyder",
         "video": false,
         "vote_average": 8.4,
         "vote_count": 6557
      },
      {
         "adult": false,
         "backdrop_path": "/h9DIlghaiTxbQbt1FIwKNbQvEL.jpg",
         "genre_ids": [
            28,
            12,
            53
         ],
         "id": 581387,
         "original_language": "ko",
         "original_title": "백두산",
         "overview": "Estagnado desde 1903, a 9000 pés de altitude, um vulcão entra em erupção na Montanha Baekdu, localizada na fronteira entre a China e a Coreia do Norte. Armado com a ameaça de erupções iminentes, uma equipe de profissionais treinados exclusivamente da Coreia do Sul e do Norte se unem. Juntos, eles devem unir forças e tentar evitar um desastre catastrófico que ameaça a Península Coreana.",
         "popularity": 395.109,
         "poster_path": "/lT6BaTnPc9Q7oPyLfiBtC6fNyep.jpg",
         "release_date": "2019-12-19",
         "title": "Alerta Vermelho",
         "video": false,
         "vote_average": 6.4,
         "vote_count": 318
      },
      {
         "adult": false,
         "backdrop_path": "/c0izdYdnTe4uMRifHgvTA85wPz0.jpg",
         "genre_ids": [
            28,
            12,
            27,
            80
         ],
         "id": 503736,
         "original_language": "en",
         "original_title": "Army of the Dead",
         "overview": "Após um surto de zumbis em Las Vegas, nos Estados Unidos, um grupo de mercenários faz uma aposta final, aventurando-se na zona de quarentena para tentar realizar o maior assalto de todos os tempos.",
         "popularity": 435.488,
         "poster_path": "/kn72J6BFcN71VYOl8sTVeo7x9ph.jpg",
         "release_date": "2021-05-14",
         "title": "Army of the Dead: Invasão em Las Vegas",
         "video": false,
         "vote_average": 6.4,
         "vote_count": 2336
      },
      {
         "adult": false,
         "backdrop_path": "/aknvFyJUQQoZFtmFnYzKi4vGv4J.jpg",
         "genre_ids": [
            28,
            12,
            18,
            878
         ],
         "id": 438631,
         "original_language": "en",
         "original_title": "Dune",
         "overview": "Em um futuro distante, planetas são comandados por casas nobres que fazem parte de um império feudal intergalático. Paul Atreides é um jovem homem cuja família toma controle do planeta deserto Arrakis, também conhecido como Duna. A única fonte da especiaria melange, a substância mais importante do cosmos, Arrakis se prova ser um planeta nem um pouco fácil de governar.",
         "popularity": 400.102,
         "poster_path": "/s1FhMAr91WL8D5DeHOcuBELtiHJ.jpg",
         "release_date": "2021-09-15",
         "title": "Duna",
         "video": false,
         "vote_average": 8.2,
         "vote_count": 821
      },
      {
         "adult": false,
         "backdrop_path": "/heMC3jAjQPNSlr1n9mZKUQ58EOE.jpg",
         "genre_ids": [
            28,
            12,
            18
         ],
         "id": 672322,
         "original_language": "ja",
         "original_title": "るろうに剣心 最終章 The Beginning",
         "overview": "Kenshin é um terrível assassino conhecido como Battosai. Mas quando ele conhece a doce Tomoe Yukishiro, sua história começa a mudar.",
         "popularity": 422.69,
         "poster_path": "/eKfxxGjjVqrWx2iD2AxQUiY1hwR.jpg",
         "release_date": "2021-06-04",
         "title": "Samurai X: A Origem",
         "video": false,
         "vote_average": 7.8,
         "vote_count": 172
      }
   ],
   "total_pages": 38,
   "total_results": 742
}


// PESQUISANDO O FILME PELO ATOR
export const moviePerActor = "https://api.themoviedb.org/3/search/person?api_key=8c4b9c259a7ff3b6a1eba387b6b7faff&language=en-US&query=Cruise&page=1&include_adult=false"
