var lookup = {
   'Austria': ['Ballettschule Krejsa', 'Ballettstudio Karussell', 'Dance Hall Bühnentanzschule Götzis', 'Dancing World Tanzschule Alexander Kreissl', 'Tanzhof', 'Tanzschule Hippmann', 'Tanzstudio dance work', 'Tanzstudio Inna Doerfler', 'Theater Ballettschule MAESTRO', 'UET Dancers'],

   'Bosnia and Herzegovina': ['Ars Centre'],

   'Bulgaria': ['Akrobalet "Tiara" ', 'Ballet Melady', 'Ballet Formation Targovishte', 'Ballet school Silhouette', 'Ballet Studio "Krassimira Koldamova"', 'Children Dancing Studio "Pumpal"', 'Dance klub Aspri', 'Dance School "D and G"', 'Dance Station Bulgaria', 'DSC "Tangra"', 'KIK Boleslava ', 'Klub Karat', 'Movin\'ART', 'Musichall theatre Plovdiv', 'Odette Ballet Studio', 'Shkola ballet', 'The Hopers', 'Vaya Dance Studio', 'Virginia ballet', 'Virginia Dance Crew'],

   'Cyprus': ['FREE FLIGHT DANCE STUDIO'],

   'Czech Republic': ['BALET HKH', 'Baletní škola Arabeska Praha', 'Baletní škola Filiánek', 'Ballet Academy of Adela Pollertova', 'IRIS ballet - dance studio Olomouc', 'Moravian institut of education, o.p.s.', 'SZUŠ Mgr. Radmily Chmelové', 'Terpsichore Ballet Company', 'TS Žába', 'ZUŠ Zbraslav'],

   'England': ['BIGHTON COLLEGE DANCE SCHOOL', 'Freeman Dance', 'Fryday\'s Academy of Irish Dance', 'Handforth & Prestbury School of Dance', 'Harlequin Stage School', 'JACQUI ISON SCHOOL OF DANCE AND THEATRE ARTS', 'Jean Marks School of Dance', 'Kelly Shirley School of Dance', 'Marie Clarke School of Dance', 'Nazene Danielle\'s Dance Dynamix', 'Shining Stars Dance Academy', 'Spotlight Stage School', 'SWINDON ACADEMY OF DANCE', 'THE CHESHIRE THEATRE SCHOOL', 'The Vale School of Dance', 'TIMESTEP ACADEMY OF DANCE AND PERFORMING ARTS', 'TOTNES SCHOOL OF DANCE', 'ZOE PENNINGTON DANCE STUDIOS', 'Gemma Short School Of Dance And Theatre Arts ', 'Yasmin TaylorAcademy of Dance', 'Cheshunt Dance School'],

   'France': ['LA RYTHMO', 'SYNOPSIS DANSE'],

   'Germany': ['1. JDC im Dance-Center Freiburg Heidi Weber', 'Arabesque Ballettschule Hof', 'Art & Dance', 'Balletschool Bettina Suess', 'Ballett Andrea Hilger Bayreuth', 'Ballett-und Tanzschule Fettich', 'Ballettschule Alena Schneider', 'Ballettschule Dana Kalicinska', 'Ballettschule Eva Holzschuh', 'Ballettschule International Bonn', 'Ballettschule Kaiserswerth', 'Ballettschule Korinna Söhn', 'Ballettschule Muckenthaler', 'Ballettschule Olga Kochanke', 'Ballettschule ON POINT e.V.', 'Ballettschule Wojtasik', 'Ballettstudio Armin Krain', 'Dance School "Alisa"', 'JSV Düsseldorf', 'KuBiS Worms e.V.', 'Modern Movement Ballettstudio', 'Musikschule der Stadt St.Augustin', 'Musikschule Heinrich Schütz Gera Abt. Tanz', 'SV Hage Ballett', 'T-Studio Ballett & Pilates', 'Tanz Teenies', 'TanzDesign', 'Tanzforum Damerau', 'Tanzhaus Wuppertal', 'Tanzparterre', 'Tanzschule Yvette', 'Tanzstudio Fancy', 'Tanzstudio Odenthal', 'Theresia-Gerhardinger-Gymnasium ', 'Trabzon-Karadeniz Kültür ve Dayanisma Dernegi', 'Reel Irish Dance School', 'The Academy of Dance and Theatre Arts'],

   'India': ['Lourd Vijay\'s Dance Studio'],

   'Indonesia': ['STUDIO TYDIF SURABAYA'],

   'Italy': ['A.S.D. Artedanza Maracalgaonis', 'ARABESQUE DI CRISTINA CHIRCO', 'Asd Dance Project', 'ASD LIFE CENTER (OLBIA DANCE CENTER)', 'ATELIER DELLA DANZA', 'Broadway dance studio', 'CENTRO DANZA SOLARO', 'Centro Studi Tersicore Danza', 'Darkers Crew', 'HAPPY DANCE di IRINA PANA'],

   'Japan': ['Passion du Ballet a Kyoto'],

   'Jersey': ['SILHOUETTE STUDIOS OF PERFORMANCE LTD'],

   'Kazakhstan': ['Team Kazakhstan'],

   'Malaysia': ['Tagaps Dance Theatre', 'TEAM TOBISA / USDA'],

   'Moldova': ['Bravissimo Dance Group'],

   'Northern Ireland': ['Pop Tap Dance Academy'],

   'Poland': ['AMA Popołudniowa Szkoła Artystyczna', 'ASSAMBLE', 'Capitol Ballet School ', 'Exercise', 'Formacja Taneczna EKS-tremum I', 'Krakowska Akademia Tanca', 'Młodzieżowy Dom Kultury (MDK)', 'School Dance Kielce Dance Theater', 'STUDIO BALETOWE " TERPSYCHORA" Izabela Popluc-Chwastecka', 'Studio Baletowe Opery Krakowskiej', 'Szkoła Tańca BROADWAY '],

   'Portugal': ['Academia de Bailado Paulo VI', 'Academia de Dança de Alcobaça', 'Academia de Dança do Centro Norton de Matos', 'ACADEMIA GIMNOARTE', 'Academia Roysel Alfonso', 'Casa do Povo de Fátima', 'Centro de Dança do Porto', 'Companhia de Dança do Algarve', 'Dance Box Studios', 'DiArteDance', 'EDDALM-Escola de Dança Ana Luísa Mendonça', 'ENT\'ARTES - ESCOLA DE DANÇA (Ext. N. S. Graças)', 'Flash Li Dance School', 'Move-Ment Dance School'],

   'Republic of Ireland': ['Centre Stage School of Dance', 'On Your Toes Dance Academy', 'Shawbrook Youth Dance Company'],

   'Romania': ['ANGY DANCE STUDIO', 'ASOCIATIA BIMBAM', 'Ballet Academic Svetlana', 'BlockBusters Dance', 'Bucharest Sport Club', 'C.S. DAVIDANS ', 'Catharsis', 'CENTRUL JUDETEAN DE CULTURA  PRAHOVA', 'Dance Planet', 'DINAMIC GROUP - THE NATIONAL CHILDREN\'S PALACE ROMANIA', 'DUENDE', 'EDUCA Ballet School', 'Joy2Dance', 'La Sylphide Ballet School', 'ODETTE SCHOOL ', 'OLEG DANOVSKI', 'Scoala de Arta Bucuresti', 'Studioul Coregrafic Reverence', 'UNIKGYM - CLUBUL COPIILOR SECTOR 1', 'X\'s Dance'],

   'Russia': ['Dance Laboratory of  Irina Yatskovskaya', 'Dance school "Danza"', 'Fiesta', 'Galateya dance theater', 'Mziuri', 'Solovushka'],

   'Slovenia': ['HARLEKIN - DRUŠTVO ZA UMETNOST PLESA', 'Kulturno umetniško društvo Plesne sanje', 'ZAVOD ARTUTRIP', 'ZAVOD BALETNA ŠOLA STEVENS'],

   'South Africa': ['Ann Campbell School of Ballet', 'Christian School of Art', 'Bowring Levin Dance School', 'Dance Vision', 'Dance@Work', 'DC Dance Cats', 'Elite Vaganova Ballet School', 'Georgina\'s Dance Studio', 'JOZI Youth Dance Company', 'Just Dance', 'Molfessis & Wells Studio of Ballet', 'Moving Visions', 'Rosenberg Dance', 'South Africa Dance Team', 'Rosenberg Dance Studio', 'Steps School of Dance', 'Stiehla Dance', 'Yolande Mostert Dance Worx'],

   'Spain': ['BALLET JUVENIL VOCACIONS', 'Centre de dansa Marta Coll', 'COMPANY & COMPANY', 'EDMB', 'Elite Dance ', 'ESCOLA DE DANSA ADAGI', 'ESCOLA DE DANSA DE ALARO', 'ESCOLA DE DANSA DEL CASAL DE L¡ESPLUGA DE FRANCOLÍ', 'Escola de Dansa Disset', 'ESCOLA DE DANSA ITACA', 'Escola de Dansa Mercedes Ribera', 'Escuela De Baile Loli', 'ESCUELA DE DANZA GEMA SANCHEZ', 'Escuela de Danza Loida Grau', 'ESCUELA DE DANZA RUSSKAYA', 'ESCUELA DE DANZA Y TEATRO TEMPO', 'estudio de danza esmeralda', 'europa international dance school', 'EXIT', 'GALICIA EN DANZA', 'JOVE BALLET DE CATALUNYA', 'Joven Ballet del Pirineo', 'La Companyia', 'MADÓ', 'MagDanza', 'Step by Step'],

   'Sri Lanka': ['Dilu School Of Dancing'],

   'Switzerland': ['Ballettschule Barbara Bernard ', 'Musikschule Freienbach Switzerland', 'Russische Kinderballettschule/Spectacolo Dance Academy '],

   'Ukraine': ['Vlad Yama Dance school'],

   'Wales': ['Moya Vahey School Of Russian Classical Ballet']
};

$('#test').on('change', function() {
   // Set selected value as variable
   var selectValue = $(this).val();
   // Empty the schools select field
   $('#test2').empty();
   // For each school in the selected country
   for (i = 0; i < lookup[selectValue].length; i++) {
      // Output school
      $('#test2').append("<option value='" + lookup[selectValue][i] + "'>" + lookup[selectValue][i] + "</option>");
   }
});
function openSchool() {
  $('.school-container li .school-block').click(function() {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');

      var setLeftPos = $('.school-container li .school-block.active').position().left,
        setRightPos = -setLeftPos + $('.school-container').width() - $(this).width(),
        schoolBlock = $(this);
      state = $(this).children('.state');

      $(schoolBlock).css('left', setLeftPos);
      $(schoolBlock).css('right', setRightPos);

      $(schoolBlock).animate({
        'bottom': '0',
        'top': '0',
        'min-width': ''
      }, {
        duration: 250,
        queue: false
      });
      $(schoolBlock).animate({
        'left': '0',
        'right': '0'
      }, {
        duration: 250,
        queue: false
      });
      $(state).animate({
        width: '40%'
      }, {
        duration: 250,
        queue: false
      });

      setTimeout(function() {
        $('.schools').css('width', '59%');
        $('.school-list').addClass('fade');
        $('.closeSchool').addClass('fade');
      }, 300);

      $('.closeSchool').click(function() {
        $('.school-container li .school-block.active').dequeue().animate({
          'bottom': '100%',
          'top': '0',
          'min-width': '200px',
          'left': setLeftPos,
          'right': setRightPos
        }, 250, function() {
          $('.school-container li .school-block.active').removeClass('active');
          var setLeftPos = 0;
          var setRightPos = 0;

        });
        $(state).animate({
          width: '96%'
        }, {
          duration: 250,
          queue: false
        });

        $('.schools').css('width', '1%');
        $('.school-list').removeClass('fade');
        $('.closeSchool').removeClass('fade');
        $('.map').removeClass('slide');
      });
    } else {
      console.log('doesnt');
    }
  });

  $('.address').click(function() {
    $('.map').addClass('slide');
    $('.slide').click(function() {
      $('.map').removeClass('slide');
    });
  });

}
function ADMIN_PAGE() {
  location.replace("/vclogin")
} 
function functionInit() {
  openSchool();
}

$(function() {
  functionInit();
});