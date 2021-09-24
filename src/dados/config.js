// CHAVE DE ACESSO A API
// será recebido depois de acessar o login
export const apiKey = "8c4b9c259a7ff3b6a1eba387b6b7faff";
export const language = "pt-BR";


// Passa toddas as informações do filme por props
// para fazer o calculo do filme
// ex: promoção de 10% em filmes do genero de terror.
// pegaria da props do filme na categoria e adicionaria um desconto
// para quem fosse do genero de terror.
// 
export function moviePrice(movie) {
   // melhorias > a const "genre" tem todos os generos com seus respectivos descontos, tirar do SWITCH CASE e colocar apartir da const.
   const valueBase = movie.vote_average * 1;
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
   const discountMovieGenre = genreMovieDiscount(movie.genre_ids);

   // Ternário para nenhum filme ficar com o valor negativo, caseo o seu genero tenha algum desconto grande.
   const totalValue = (valueBase - (discountMovieGenre.totalDiscount + discountAll)).toFixed(2) < 0 ? 0 : (valueBase - (discountMovieGenre.totalDiscount + discountAll)).toFixed(2);

   return totalValue;
}


/****************************************************************************/
// (FORMULA)
// em um valor padrão de 100k de pessoas assistindo
// quero receber as HomeNowPlayingQtd os 5 primeiros filmes
// ou até a soma dos anteriores até 5º ou até completar a
// quantidade de 100k de pessoas assistindo.
// [podendo mudar o texto do destaque para muitos assistidos quando tiver 2]

// esses 100k de pessoas pode ser a média diária dos ultimos X dias,
// semanas ou meses(periodo). podendo ser flexivel no seu periodo e quantidade de pessoas.*/
export const HomeNowPlayingQtd = 5

export const genre =
{
   "genres": [
      {
         "id": 28,
         "name": "Action"
      },
      {
         "id": 12,
         "name": "Adventure"
      },
      {
         "id": 16,
         "name": "Animation"
      },
      {
         "id": 35,
         "name": "Comedy"
      },
      {
         "id": 80,
         "name": "Crime"
      },
      {
         "id": 99,
         "name": "Documentary"
      },
      {
         "id": 18,
         "name": "Drama"
      },
      {
         "id": 10751,
         "name": "Family"
      },
      {
         "id": 14,
         "name": "Fantasy"
      },
      {
         "id": 36,
         "name": "History"
      },
      {
         "id": 27,
         "name": "Horror"
      },
      {
         "id": 10402,
         "name": "Music"
      },
      {
         "id": 9648,
         "name": "Mystery"
      },
      {
         "id": 10749,
         "name": "Romance"
      },
      {
         "id": 878,
         "name": "Science Fiction"
      },
      {
         "id": 10770,
         "name": "TV Movie"
      },
      {
         "id": 53,
         "name": "Thriller"
      },
      {
         "id": 10752,
         "name": "War"
      },
      {
         "id": 37,
         "name": "Western"
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
         "certification": "L",
         "meaning": "General Audiences. Do not expose children to potentially harmful content.",
         "order": 1
      },
      {
         "certification": "10",
         "meaning": "Not recommended for minors under ten. Violent content or inappropriate language to children, even if of a less intensity.",
         "order": 2
      },
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
         "certification": "16",
         "meaning": "Not recommended for minors under sixteen. Scenes featuring production, trafficking and/or use of illegal drugs, hyper-realistic sex, sexual violence, abortion, torture, mutilation, suicide, trivialization of violence and death penalty.",
         "order": 5
      },
      {
         "certification": "18",
         "meaning": "Not recommended for minors under eighteen. Scenes featuring explicit sex, incest, pedophilia, praising of the use of illegal drugs and violence of a strong imagery impact.",
         "order": 6
      }
   ],
}

export const movies =
{
   "page": 1,
   "results": [
      {
         "adult": false,
         "backdrop_path": "/byflnwPMumyvrCW9SfO5Miq3647.jpg",
         "genre_ids": [
            28,
            53
         ],
         "id": 597891,
         "original_language": "en",
         "original_title": "Kate",
         "overview": "Após ser envenenada de forma irreversível, uma assassina implacável tem menos de 24 horas para se vingar.",
         "popularity": 1869.405,
         "poster_path": "/4VxMucmZucro6Sxb578MCY0JDHE.jpg",
         "release_date": "2021-09-10",
         "title": "Kate",
         "video": false,
         "vote_average": 6.8,
         "vote_count": 438
      },
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
         "popularity": 1980.949,
         "poster_path": "/wTS3dS2DJiMFFgqKDz5fxMTri.jpg",
         "release_date": "2021-07-28",
         "title": "O Esquadrão Suicida",
         "video": false,
         "vote_average": 7.9,
         "vote_count": 4009
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
         "popularity": 1746.898,
         "poster_path": "/6T0r3jBs0xbmzVnM9u7e3vUXMYk.jpg",
         "release_date": "2021-09-01",
         "title": "Shang-Chi e a Lenda dos Dez Anéis",
         "video": false,
         "vote_average": 7.9,
         "vote_count": 999
      },
      {
         "adult": false,
         "backdrop_path": "/vD8oPUpDUZDTGI5IVofxrUjxxUO.jpg",
         "genre_ids": [
            28,
            53
         ],
         "id": 595743,
         "original_language": "en",
         "original_title": "SAS: Red Notice",
         "overview": "Um pequeno exército de criminosos bem treinados liderados por Laszlo Antonov sequestrou o Eurostar nas profundezas do Canal da Mancha.",
         "popularity": 1552.147,
         "poster_path": "/yplhrbLKFPJbjnQDUyVztZ1K2Te.jpg",
         "release_date": "2021-08-11",
         "title": "Ascensão do Cisne Negro",
         "video": false,
         "vote_average": 6,
         "vote_count": 174
      },
      {
         "adult": false,
         "backdrop_path": "/gzppdxEJ6fofhtLzSVSUJZEVxvq.jpg",
         "genre_ids": [
            28,
            878,
            53
         ],
         "id": 848278,
         "original_language": "en",
         "original_title": "Jurassic Hunt",
         "overview": "A aventureira Parker se junta a uma equipe de caçadores de troféus em um remoto parque selvagem. Seu objetivo: matar dinossauros geneticamente recriados para o esporte usando rifles, flechas e granadas.",
         "popularity": 1275.409,
         "poster_path": "/uYwlxf1XLQjZyYQIV3ViqmUg4t6.jpg",
         "release_date": "2021-09-01",
         "title": "Caça Jurássica",
         "video": false,
         "vote_average": 5,
         "vote_count": 130
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
         "popularity": 1313.239,
         "poster_path": "/9E76j2DcQv8LdbX1Wa9jpbDBfw1.jpg",
         "release_date": "2021-07-28",
         "title": "Jungle Cruise",
         "video": false,
         "vote_average": 7.9,
         "vote_count": 2681
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
         "popularity": 1291.674,
         "poster_path": "/rKq1Vlw0Bqe2EEvdmIkkkgPQAGf.jpg",
         "release_date": "2021-07-07",
         "title": "Viúva Negra",
         "video": false,
         "vote_average": 7.7,
         "vote_count": 5099
      },
      {
         "adult": false,
         "backdrop_path": "/nprqOIEfiMMQx16lgKeLf3rmPrR.jpg",
         "genre_ids": [
            28
         ],
         "id": 619297,
         "original_language": "en",
         "original_title": "Sweet Girl",
         "overview": "Ele perdeu o amor de sua vida por causa da ganância da indústria farmacêutica. Agora, sua filha está órfã e a justiça não chega. Por enquanto.",
         "popularity": 1194.629,
         "poster_path": "/cygRJp2OQKsiGbJxKq5TbvzW9QR.jpg",
         "release_date": "2021-08-18",
         "title": "Justiça em Família",
         "video": false,
         "vote_average": 6.9,
         "vote_count": 581
      },
      {
         "adult": false,
         "backdrop_path": "/mHU833IrBRfZ3hhzEQsiiw2D8Nc.jpg",
         "genre_ids": [
            27,
            53
         ],
         "id": 565028,
         "original_language": "en",
         "original_title": "Candyman",
         "overview": "Em um bairro pobre de Chicago, a lenda de um espírito assassino conhecido como Candyman (Yahya Abdul-Mateen II) assolou a população anos atrás. Agora, o local foi renovado e é lar de cidadãos de alta classe. Quando o espírito retorna, os novos habitantes também serão obrigados a enfrentar a ira de Candyman.",
         "popularity": 1091.487,
         "poster_path": "/51Zvpg2kAIrzPdsQcIWojJhEhyS.jpg",
         "release_date": "2021-08-25",
         "title": "A Lenda de Candyman",
         "video": false,
         "vote_average": 6.6,
         "vote_count": 300
      },
      {
         "adult": false,
         "backdrop_path": "/xDnFlNrNUoSKPq4uptnhYmUZNpm.jpg",
         "genre_ids": [
            27,
            53,
            9648,
            80
         ],
         "id": 619778,
         "original_language": "en",
         "original_title": "Malignant",
         "overview": "Em Maligno, Madison (Annabelle Wallis) passa a ter sonhos aterrorizantes de pessoas sendo brutalmente assassinadas. Ela acaba descobrindo que, na verdade, são visões dos crimes enquanto acontecem. Aos poucos, ela percebe que esses assassinatos estão conectados a uma entidade do seu passado chamada Gabriel. Para impedir a criatura, Madison precisará investigar de onde ela surgiu e enfrentar seus traumas de infância.",
         "popularity": 1034.321,
         "poster_path": "/3Lq3VTrxyMjIMiI91rI6RPqScsu.jpg",
         "release_date": "2021-09-01",
         "title": "Maligno",
         "video": false,
         "vote_average": 7.2,
         "vote_count": 570
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
         "popularity": 1118.068,
         "poster_path": "/cl3JWmv9HbSx43TDsYyUkABKV3M.jpg",
         "release_date": "2021-08-09",
         "title": "Patrulha Canina – O Filme",
         "video": false,
         "vote_average": 7.9,
         "vote_count": 459
      },
      {
         "adult": false,
         "backdrop_path": "/dsdbViTNjLu4DbgkkYmuY4xDQ20.jpg",
         "genre_ids": [
            27,
            53,
            9648
         ],
         "id": 585216,
         "original_language": "en",
         "original_title": "Escape Room: Tournament of Champions",
         "overview": "Seis pessoas inconscientemente se encontram trancadas em outra série de salas de fuga, lentamente descobrindo o que têm em comum para sobreviver, enquanto descobrem todos os jogos que jogaram antes.",
         "popularity": 1065.645,
         "poster_path": "/ir3cxdjrJJ1r127hCeGneBYe3fS.jpg",
         "release_date": "2021-07-01",
         "title": "Escape Room 2: Tensão Máxima",
         "video": false,
         "vote_average": 7.1,
         "vote_count": 374
      },
      {
         "adult": false,
         "backdrop_path": "/26LIw3oKGPUEGUpb8AXZ64dZZt8.jpg",
         "genre_ids": [
            16,
            35,
            9648,
            10751,
            14
         ],
         "id": 843906,
         "original_language": "en",
         "original_title": "Straight Outta Nowhere: Scooby-Doo! Meets Courage the Cowardly Dog",
         "overview": "Uma luz mística vindo de um OVNI causa grande confusão em uma cidade do interior. Quando pessoas começam a desaparecer, Scooby Doo e a turma são chamados para resolverem o mistério que pode ser maior do que eles imaginam.",
         "popularity": 1043.068,
         "poster_path": "/kIzMlyaIFWWkFDVbla2O10kYe1b.jpg",
         "release_date": "2021-09-14",
         "title": "Diretamente de Lugar Nenhum: Scooby-Doo Encontra Coragem",
         "video": false,
         "vote_average": 8.5,
         "vote_count": 137
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
         "popularity": 1041.415,
         "poster_path": "/olnWkuNwCDHPYTkLKktUnFLyHFg.jpg",
         "release_date": "2021-07-01",
         "title": "O Poderoso Chefinho 2: Negócios da Família",
         "video": false,
         "vote_average": 7.8,
         "vote_count": 1404
      },
      {
         "adult": false,
         "backdrop_path": "/pUc51UUQb1lMLVVkDCaZVsCo37U.jpg",
         "genre_ids": [
            53,
            27
         ],
         "id": 482373,
         "original_language": "en",
         "original_title": "Don't Breathe 2",
         "overview": "O Homem nas Trevas 2 é a continuação oficial de O Homem nas Trevas. A história de um homem cego que aterroriza invasores de sua casa. A sequência se passa anos após a primeira invasão; quando Norman Nordstrom (Stephen Lang) vive isolado na tranquilidade de sua residência até que os pecados do seu passado voltam para cobrar seu preço.",
         "popularity": 899.728,
         "poster_path": "/ZoDPlnQGc9zwXm70pH82qF3X38.jpg",
         "release_date": "2021-08-12",
         "title": "O Homem nas Trevas 2",
         "video": false,
         "vote_average": 7.7,
         "vote_count": 715
      },
      {
         "adult": false,
         "backdrop_path": "/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg",
         "genre_ids": [
            16,
            35,
            10751,
            14
         ],
         "id": 508943,
         "original_language": "en",
         "original_title": "Luca",
         "overview": "Ambientado na bela Riviera Italiana, este longa-metragem da Disney e da Pixar acompanha as aventuras do garoto Luca durante um verão inesquecível repleto de macarronadas, gelatos e passeios incríveis de motoneta ao lado de seu novo amigo Alberto. Mas um grande segredo ameaça colocar fim à diversão: abaixo da superfície da água, eles são monstros marinhos!",
         "popularity": 989.814,
         "poster_path": "/9jPa6SlUYxPFMVZlEuceiPPAA15.jpg",
         "release_date": "2021-06-17",
         "title": "Luca",
         "video": false,
         "vote_average": 8,
         "vote_count": 4567
      },
      {
         "adult": false,
         "backdrop_path": "/8s4h9friP6Ci3adRGahHARVd76E.jpg",
         "genre_ids": [
            16,
            35,
            10751,
            878
         ],
         "id": 379686,
         "original_language": "en",
         "original_title": "Space Jam: A New Legacy",
         "overview": "O superastro do basquete LeBron James se junta à gangue Looney Tunes para derrotar o Goon Squad e salvar seu filho.",
         "popularity": 956.76,
         "poster_path": "/kU0NbsUVoUMcYxoISmBCxFmgWYC.jpg",
         "release_date": "2021-07-08",
         "title": "Space Jam: Um Novo Legado",
         "video": false,
         "vote_average": 7.4,
         "vote_count": 2226
      },
      {
         "adult": false,
         "backdrop_path": "/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
         "genre_ids": [
            28,
            80,
            53
         ],
         "id": 385128,
         "original_language": "en",
         "original_title": "F9",
         "overview": "Dominic Toretto e sua família precisam enfrentar o seu irmão mais novo Jakob, um assassino mortal que está trabalhando com uma antiga inimiga, a cyber-terrorista Cipher.",
         "popularity": 971.145,
         "poster_path": "/fnAzaxRSiveFafudJtByxA7I2xT.jpg",
         "release_date": "2021-05-19",
         "title": "Velozes & Furiosos 9",
         "video": false,
         "vote_average": 7.5,
         "vote_count": 3737
      },
      {
         "adult": false,
         "backdrop_path": "/iTgM25ftE7YtFgZwUZupVp8A61S.jpg",
         "genre_ids": [
            9648,
            53,
            27
         ],
         "id": 631843,
         "original_language": "en",
         "original_title": "Old",
         "overview": "Tempo acompanha uma família durante uma viagem para uma ilha tropical. Quando chegam em uma praia deserta, algo estranho começa a acontecer: todos passam a envelhecer rapidamente, anos inteiros passam em questão de minutos. Eles, então, precisam descobrir o que está acontecendo antes que suas vidas sejam encurtadas drasticamente.",
         "popularity": 1323.735,
         "poster_path": "/czVBkHRaZu8rOnCNTd0t7EHYj97.jpg",
         "release_date": "2021-07-21",
         "title": "Tempo",
         "video": false,
         "vote_average": 6.7,
         "vote_count": 792
      },
      {
         "adult": false,
         "backdrop_path": "/fZ4hrFacm5yow9gT64rS6YMNyHz.jpg",
         "genre_ids": [
            28,
            35
         ],
         "id": 729720,
         "original_language": "fr",
         "original_title": "Le Dernier Mercenaire",
         "overview": "Richard Brumère, um ex-agente especial do serviço secreto francês que se tornou mercenário, volta à cena quando a imunidade concedida 25 anos antes para seu filho Archibald é suspensa. Uma operação da máfia ameaça a vida de Archibald. Para salvá-lo, Richard terá que procurar seus antigos contatos e unir forças com um bando de jovens imprudentes e um burocrata excêntrico — mas, principalmente, encontrar coragem para deixar que Archibald saiba que ele é seu pai.",
         "popularity": 864.199,
         "poster_path": "/iT9k4FyhjLcfMRH8Qzk3wR99pDC.jpg",
         "release_date": "2021-07-30",
         "title": "O Último Mercenário",
         "video": false,
         "vote_average": 6.9,
         "vote_count": 395
      }
   ],
   "total_pages": 500,
   "total_results": 10000
}
