$(document).ready(function(){ 
    var prevWidth = $(window).width();

    
    function getUrlVars() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }
    
    $(window).on("load", function() {
        if (getUrlVars()["send"]=="thanks") {
            $('#about').css("opacity", "0");
            $('#de-members').fadeOut(0);
            $('#de-repertoire').fadeOut(0);
            $('#de-contact').fadeOut(0);
            $('#de-about').fadeOut(0);
            $('#de-thanks').fadeIn(500);
        }
    });
    
    $('.mobile-menu').click(function () {
        $('#menu').css("visibility", "visible");
        $('.info').fadeOut(0)
        $('#menu').fadeOut(0)
        $(this).fadeOut(200);
        $('#menu').fadeIn(500);
        $('html,body').animate({
            scrollTop: $("#menu").offset().top
        });
        
    });
    
    $('.menu-item').click(function () {
        if($(window).width() < 797) {
            $('#menu').fadeOut(0)
            $('.mobile-menu').fadeIn(500);
        }
        $('.person').css("border", "none");
    });
    
    $('#facebook').click(function () {
        window.open('https://www.facebook.com/UChicagoRunforCover/', '_blank');
    });
    $('#fb-ico').click(function () {
        window.open('https://www.facebook.com/UChicagoRunforCover/', '_blank');
    });
    
    $('#video').click(function () {
        window.open('https://play.spotify.com/artist/1WN22dBwn6fM3biZufox5W', '_blank');
    });
    $('#vid-ico').click(function () {
        window.open('https://play.spotify.com/artist/1WN22dBwn6fM3biZufox5W', '_blank');
    });
    
    $('#email').click(function () {
        window.open('mailto:uofcrunforcover@gmail.com');
    });
    $('#em-ico').click(function () {
        window.open('mailto:uofcrunforcover@gmail.com');
    });
    
    $('#facebook-2').click(function () {
        window.open('https://www.facebook.com/UChicagoRunforCover/', '_blank');
    });
    $('#fb-ico-2').click(function () {
        window.open('https://www.facebook.com/UChicagoRunforCover/', '_blank');
    });
    
    $('#video-2').click(function () {
        window.open('https://play.spotify.com/artist/1WN22dBwn6fM3biZufox5W', '_blank');
    });
    $('#vid-ico-2').click(function () {
        window.open('https://play.spotify.com/artist/1WN22dBwn6fM3biZufox5W', '_blank');
    });
    
    $('#email-2').click(function () {
        window.open('mailto:uofcrunforcover@gmail.com');
    });
    $('#em-ico-2').click(function () {
        window.open('mailto:uofcrunforcover@gmail.com');
    });
    
    $('#about-nav').click(function () { 
        $('.person').css("transform", "scale(1)"); 
        $('#about').css("opacity", "1");
        $('#members').css("opacity", "0");
        $('#repertoire').css("opacity", "0");
        $('#contact').css("opacity", "0");
        $('#de-members').fadeOut(0);
        $('#de-repertoire').fadeOut(0);
        $('#de-contact').fadeOut(0);
        $('#de-thanks').fadeOut(0);
        $('#de-about').fadeIn(500);
    });
    
    $('#members-nav').click(function () { 
        $('.person').css("transform", "scale(1)"); 
        $('#about').css("opacity", "0");
        $('#members').css("opacity", "1");
        $('#repertoire').css("opacity", "0");
        $('#contact').css("opacity", "0");
        $('#member-information').fadeOut(0);
        $('#de-about').fadeOut(0);
        $('#de-repertoire').fadeOut(0);
        $('#de-contact').fadeOut(0);
        $('#de-thanks').fadeOut(0);
        $('#de-members').fadeIn(500);
    });
    
    $('#repertoire-nav').click(function () { 
        $('.person').css("transform", "scale(1)"); 
        $('#about').css("opacity", "0");
        $('#members').css("opacity", "0");
        $('#repertoire').css("opacity", "1");
        $('#contact').css("opacity", "0");
        $('#de-members').fadeOut(0);
        $('#de-about').fadeOut(0);
        $('#de-contact').fadeOut(0);
        $('#de-thanks').fadeOut(0);
        $('#de-repertoire').fadeIn(500);
    });
    
    $('#contact-nav').click(function () { 
        $('.person').css("transform", "scale(1)"); 
        $('#about').css("opacity", "0");
        $('#members').css("opacity", "0");
        $('#repertoire').css("opacity", "0");
        $('#contact').css("opacity", "1");
        $('#de-members').fadeOut(0);
        $('#de-repertoire').fadeOut(0);
        $('#de-about').fadeOut(0);
        $('#de-thanks').fadeOut(0);
        $('#de-contact').fadeIn(500);
    });
    
    $('.person').click(function () {
        $('.person').css("transform", "scale(1)"); 
        $('.person').css("z-index", "9"); 
        $(this).css("transform", "scale(1.8)");
        $(this).css("z-index", "10");
        $('.person').css("border", "none"); 
        $(this).css("border", "solid 3px white");
        $("html, body").animate({ scrollTop: $(document).height() }, 200);
    });
    
    $('.george').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("George Saieed");
        $('#place').html("President | 3rd Year");
        $('#year').html("<strong>Major:</strong> Neuroscience");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Chocolate");
        $('#fav-song').html("<strong>Audition Song:</strong> I'm So Sorry, by Imagine Dragons ");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Phylogenetic");
        $('#quote').html("<strong>Favorite Quote:</strong> 'Cherish those who seek the truth, but beware of those who find it,' - Voltaire");
        $('#her-bio').html("When not singing with RfC, you can find George doing research in a computational neuroscience lab, reading about technology, playing piano, programming, coding, doing more coding, and basically just living and breathing all things electronic.");
        $('#member-information').fadeIn(500);
    });

    $('.hummels').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Alex Hummels");
        $('#place').html("Music Director | 2nd Year");
        $('#year').html("<strong>Major:</strong> Computational & Applied Mathematics");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Rainbow Eucalyptus");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Chocolate");
        $('#quote').html("<strong>Favorite Quote:</strong> 'It’s difficult difficult lemon difficult' - Simon Foster, In the Loop");
        $('#fav-song').html("<strong>Audition Song:</strong> Take On Me, by a-ha");
        $('#her-bio').html("Alex is a second-year CAM major from West Lafayette, Indiana. Outside of RfC, Alex likes to participate in every IM sport imaginable in place of working on his latest analysis pset. Alex is also a fox main in super smash bros melee and placed top three in doubles teaming with Yes at He Smust Be Stopped #2.");
        $('#member-information').fadeIn(500);
    });
    
    $('.ale').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Ale Clark-Ansani");
        $('#place').html("Vice President | 3rd Year");
        $('#year').html("<strong>Major:</strong> Public Policy");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Birch");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Caramel");
        $('#quote').html("<strong>Favorite Quote:</strong> 'Abraham Lincoln took naps' - Corinne Olympios");
        $('#fav-song').html("<strong>Audition Song:</strong> Cave Walls (an original song)");
        $('#her-bio').html("Ale is the resident churro meme curator and creator of Run for Cover and takes this responsibility very seriously. When he's not making bad memes about churros, he's making bad memes about Model UN, the other activity he occupies his time with. Ale is from NYC, and if you ever meet him, he'll make sure you know that about him. It's very important.");
        $('#member-information').fadeIn(500);
    });

    $('.wenye').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Wen Ye");
        $('#place').html("Business Director | 2nd Year");
        $('#year').html("<strong>Major:</strong> Economics");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Coconut Tree");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Chocolate");
        $('#quote').html("<strong>Favorite Quote:</strong> 'You're saying it wrong: it's Levi-O-sa, not Levio-SA.' - Hermione Granger");
        $('#fav-song').html("<strong>Audition Song:</strong> Just Haven't Met You Yet, by Michael Buble");
        $('#her-bio').html("Hello, I hail from the sunny island of Singapore! I'm a huge fan of musicals and I grew up reading Harry Potter books. I also enjoy swimming!");
        $('#member-information').fadeIn(500);
    });

    $('.yu').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Alex Yu");
        $('#place').html("Assistant Music Director | 3rd Year");
        $('#year').html("<strong>Major:</strong> Economics");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Christmas");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Vanilla");
        $('#quote').html("<strong>Favorite Quote:</strong> 'To live doesn't mean you're alive.' - Nicki Minaj");
        $('#fav-song').html("<strong>Audition Song:</strong> Back to Black, by Amy Winehouse");
        $('#her-bio').html("Alex loves Run For Cover. Outside of a cappella, Alex enjoys making playlists and humming. He also enjoys short bios.");
        $('#member-information').fadeIn(500);
    });

    $('.rubin').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Alex Rubin");
        $('#place').html("Artistic Director | 4th Year");
        $('#year').html("<strong>Major:</strong> Philosophy");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Palm");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Chocolate");
        $('#quote').html("<strong>Favorite Quote:</strong> 'Any object, intensely regarded may be used as a gate of access to the incorruptible eon of the gods.' - James Joyce");
        $('#fav-song').html("<strong>Audition Song:</strong> At Last, by Etta James");
        $('#her-bio').html("Alex (Rubin, for short) is a philosophy major from upstate New York. In addition to serving as artistic director, he’s also involved in research, specifically whether or not he can bring his Nintendo Switch to rehearsal next quarter. Outside of Run for Cover, Alex writes indie pop and rap music.");
        $('#member-information').fadeIn(500);
    });

    $('.ben').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Ben Donvan");
        $('#place').html("Social Chair | 3rd Year");
        $('#year').html("<strong>Major:</strong> History");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Silver Oak");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Bavarian Creme");
        $('#quote').html("<strong>Favorite Quote:</strong> 'Party rock is in the hou.' - LMFAO");
        $('#fav-song').html("<strong>Audition Song:</strong> Fly Me to the Moon, by Frank Sinatra");
        $('#her-bio').html("Ben is a third year history major. He's from DC. He likes bad puns. And writing in the third person. (and also short bios, apparently).");
        $('#member-information').fadeIn(500);
    });

    $('.ziv').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Ziv Kraus");
        $('#place').html("Alumnus");
        $('#year').html("<strong>Major:</strong> Psychology");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Rain Tree");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Chocolate");
        $('#quote').html("<strong>Favorite Quote:</strong> 'To the well organized mind, death is but the next great adventure' - Dumbledore");
        $('#fav-song').html("<strong>Audition Song:</strong> Holy Grail, by Jay Z ft. Justin Timberlake");
        $('#her-bio').html("Hi, I'm Ziv! My name's pronounced like Steve, but with a Z! In the little time that I don't spend making drum sounds with my mouth, I enjoy photography, cooking, and playing stack cup. Blurb is a weird word, whoever came up with it was probably high (on life, obviously).");
        $('#member-information').fadeIn(500);
    });

    $('.yoo').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Alex Yoo");
        $('#place').html("4th Year");
        $('#year').html("<strong>Major:</strong> Biology");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Hibiscus Syriacus");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Chocolate");
        $('#quote').html("<strong>Favorite Quote:</strong> 'Your Highness, I still have twelve battleships' - Yi Sun-Sin");
        $('#fav-song').html("<strong>Audition Song:</strong> Can’t Take My Eyes Off Of You - Original by Ale");
        $('#her-bio').html("Alex has been a part of Run for Cover since the beginning of his college career. During his third year, he faithfully served his civic duty as the group’s president. Alex majors in the biological sciences because it was the most convenient major for a pre-med. Because he is afraid to become a real adult, he will continue to dedicate 8 more years of his life to school.");
        $('#member-information').fadeIn(500);
    });

    $('.morrison').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Daniel Morrison");
        $('#place').html("Acacouncil Rep | 3rd Year");
        $('#year').html("<strong>Major:</strong> Computer Science/ Near Eastern Languages & Civilizations");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Binary Search");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Caramel");
        $('#quote').html("<strong>Favorite Quote:</strong> 'I just don't think Hobbes was very concerned about donut transactions'");
        $('#fav-song').html("<strong>Audition Song:</strong> Like I'm Gonna Lose You, by Meghan Trainor & John Legend");
        $('#her-bio').html("Dan is a 3rd year CS/NELC major from Falmouth, Massachusetts. When he's not at RfC rehearsal, you can find him in CSIL trying and failing to write decent code or in Reynolds drinking more coffee than can possibly be healthy. His roommates recently voted him 'Most Likely to Order from Sarpino's at 2 AM Before Starting a Civ Essay Due in 10 Hours.'");
        $('#member-information').fadeIn(500);
    });

    $('.chavez').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Christopher Chavez");
        $('#place').html("3rd Year");
        $('#year').html("<strong>Major:</strong> Anthropology");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Wood Wood");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Chocolate");
        $('#quote').html("<strong>Favorite Quote:</strong> 'Poolside convo about your summer last night. ooh. yeah. about your summer last night.' - Frank Ocean");
        $('#fav-song').html("<strong>Audition Song:</strong> Friday, by Rebecca Black");
        $('#her-bio').html("I like shoes and Kanye West (and really lame bios, apparently. Though this is actually really all you need to know about Chris).");
        $('#member-information').fadeIn(500);
    });

    $('.steve').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Stephen Howell");
        $('#place').html("3rd Year | Exchange Student");
        $('#year').html("<strong>Major:</strong> Physics");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Yew *wink*");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Vanilla");
        $('#quote').html("<strong>Favorite Quote:</strong> 'You did not wake up this morning just so you could be mediocre'");
        $('#fav-song').html("<strong>Audition Song:</strong> If I Ain't Got You, by Alicia Keys");
        $('#her-bio').html("Witty, sharp-tongued, and British. From the south coast of England, Steve is an exchange student from King's College London. Mr Howell can commonly be found at: his residence the Reg, killing it singing at a party, and occasionally he'll be in lectures. Steve is that guy who sings bass but can sing pretty high too, it's no biggie though because he doesn't like drawing attention to it *cough*. Being a newb exchange student in this academic year, Steve is completely not sore about the fact that we're not competing in ICCAs this year. At all. Warm and welcoming in a sweary way, Steve enjoys nothing more than doing psets last minute and then getting angry at himself for not doing them earlier.");
        $('#member-information').fadeIn(500);
    });

    $('.michael').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Michael Hanna");
        $('#place').html("2nd Year");
        $('#year').html("<strong>Major:</strong> Linguistics & Computer Science");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Banana Tree (Gros Michel cultivar)");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Strawberry");
        $('#quote').html("<strong>Favorite Quote:</strong> 'Do people really have favorite quotes...?' - Me");
        $('#fav-song').html("<strong>Audition Song:</strong> Empty Chairs at Empty Tables, from Les Miserables");
        $('#her-bio').html("Michael is a second-year from Massachusetts. He is passionate about languages, and loves traveling to places where other languages are spoken. In his free time, he enjoys playing games (indie freeware, like Cave Story or OFF), and reading books (like The Buried Giant).");
        $('#member-information').fadeIn(500);
    });

    $('.aidan').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Aidan Coffey");
        $('#place').html("Productivity Director | 2nd Year");
        $('#year').html("<strong>Major:</strong> Political Science & Public Policy");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Pine");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Caramel");
        $('#quote').html("<strong>Favorite Quote:</strong> 'No one can work harder at being happy than Americans do' - de Tocqueville");
        $('#fav-song').html("<strong>Audition Song:</strong> Amarili, by Cecelia Bartolli");
        $('#her-bio').html("Genial and solicitious, Mr. Coffey embodies the buoyant zeitgeist of Run for Cover. Gregarious, yet more often then not sedated from his onerous schedule, he thoroughly enjoys harmonizing amongst his euphonious companions. Mr. Coffey enjoys creative writing, and is mildly salty about having to write this bio.");
        $('#member-information').fadeIn(500);
    });

    $('.itai').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Itai Fru(it)chter");
        $('#place').html("1st Year");
        $('#year').html("<strong>Major:</strong> idk i'm indecisive stop asking");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Dragon's Blood");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> PB&J");
        $('#quote').html("<strong>Favorite Quote:</strong> 'I'm not saying I hate you. I'm just saying if you got hit by a bus, I'd be driving that bus.'");
        $('#fav-song').html("<strong>Audition Song:</strong> The Wheels on the Bus");
        $('#her-bio').html("Itai is a 0th year obsessed with MUN and, as a result, slowly becoming a careerist. He loves singing with his deep, manly voice, and is a bit too tall. He also seems lost 25/8.");
        $('#member-information').fadeIn(500);
    });

    $('.zack').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Zack Crenshaw");
        $('#place').html("1st Year");
        $('#year').html("<strong>Major:</strong> Linguistics");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Northern Magnolia");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Caramel");
        $('#quote').html("<strong>Favorite Quote:</strong> 'Consent is my ish.' – Benjamin Charles Prevor III");
        $('#fav-song').html("<strong>Audition Song:</strong> Electric Love, by BØRNS");
        $('#her-bio').html("Zack is a first year Linguistics major who really believes he can get a job in that field. He is also taking the intro CS sequence because he is genuinely interested in the subject matter, and definitely not as back up. He's from Philadelphia, PA, and will secretly laugh at you every time you call a hoagie a sub. He enjoys the outdoors, Just Dance, melted cheese, piña coladas, and getting caught in the rain.");
        $('#member-information').fadeIn(500);
    });
   
});

    
    $(window).resize(function() {
        if($(window).width() > 796) {
                $('.mobile-menu').fadeOut(0);
                $('#menu').fadeIn(0);
                if ($('.info').css("opacity") == 0) {
                    $('#about').css("opacity", "0");
                }
        }
        if($(window).width() < 797 && prevWidth > 796 && $('.info').css("opacity") != 0) {
            $('.mobile-menu').fadeIn(500);
            $('#menu').fadeOut(0);
        }
        var nw = $(window).width();
        //compare new and old width      
        prevWidth = nw;
    });