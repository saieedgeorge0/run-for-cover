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
        $('#place').html("Webmaster/Designer | 4th Year");
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
        $('#place').html("3rd Year");
        $('#year').html("<strong>Major:</strong> Computational & Applied Mathematics, Statistics");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Redwood");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Chocolate");
        $('#quote').html("<strong>Favorite Quote:</strong> 'It’s difficult difficult lemon difficult' - Simon Foster, In the Loop");
        $('#fav-song').html("<strong>Audition Song:</strong> Take On Me, by a-ha");
        $('#her-bio').html("Alex is a third-year CAM/Stats major from West Lafayette, Indiana. Outside of RfC, Alex enjoys playing IMs and having fun with GRAHAM HOUSE BEST HOUSE. Alex is a fox main in smash bros melee, a roy main in smash bros ultimate, and enjoys staying up late at night to watch adults play mafia.");
        $('#member-information').fadeIn(500);
    });
    
    $('.ale').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Ale Clark-Ansani");
        $('#place').html("4th Year");
        $('#year').html("<strong>Major:</strong> Public Policy");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Birch");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Caramel");
        $('#quote').html("<strong>Favorite Quote:</strong> 'Abraham Lincoln took naps' - Corinne Olympios");
        $('#fav-song').html("<strong>Audition Song:</strong> Cave Walls (an original song)");
        $('#her-bio').html("Ale is the resident churro meme curator and creator of Run for Cover and takes this responsibility very seriously. When he's not making bad memes about churros, he's making bad memes about Model UN, the other activity he occupies his time with. Ale is from NYC, and if you ever meet him, he'll make sure you know that about him. It's very important.");
        $('#member-information').fadeIn(500);
    });

    $('.yu').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Alex Yu");
        $('#place').html("4th Year");
        $('#year').html("<strong>Major:</strong> Economics");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Christmas");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Vanilla");
        $('#quote').html("<strong>Favorite Quote:</strong> 'To live doesn't mean you're alive.' - Nicki Minaj");
        $('#fav-song').html("<strong>Audition Song:</strong> Back to Black, by Amy Winehouse");
        $('#her-bio').html("Alex loves Run For Cover. Outside of a cappella, Alex enjoys making playlists and humming. He also enjoys short bios.");
        $('#member-information').fadeIn(500);
    });

    $('.ben').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Ben Donvan");
        $('#place').html("4th Year");
        $('#year').html("<strong>Major:</strong> History");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Histree");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> I don't like sweet stuff cuz I hate fun");
        $('#quote').html("<strong>Favorite Quote:</strong> 'It doesn't have to be like this / killer whales - carseat headrest");
        $('#fav-song').html("<strong>Audition Song:</strong> Fly Me to the Moon, by Frank Sinatra");
        $('#her-bio').html("Ben is a jaded fourth year. He is tired. So tired. He likes watching Minecraft let’s plays and nothing else. Growing up he thought he’d be a jerry but it turns out he’s a George. Oh wait he also likes environmentalism.");
        $('#member-information').fadeIn(500);
    });

    $('.morrison').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Daniel Morrison");
        $('#place').html("4th Year");
        $('#year').html("<strong>Major:</strong> Computer Science/ Near Eastern Languages & Civilizations");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Binary Search");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Bavarian Creme");
        $('#quote').html("<strong>Favorite Quote:</strong> 'I just don't think Hobbes was very concerned about donut transactions'");
        $('#fav-song').html("<strong>Audition Song:</strong> Like I'm Gonna Lose You, by Meghan Trainor & John Legend");
        $('#her-bio').html("Originally from Falmouth, Massachusetts, Dan's personal mission as music director is to insert at least one gratuitous tone cluster into every arrangement. When he's not at rehearsal, he's usually \"working\" on his \"thesis\" (read: watching Netflix with some papers open in another tab) or running the same Python script over and over again hoping to get different results. Ask him about type theory, Iranian revolutionary art, or why Dorian is the best mode.");
        $('#member-information').fadeIn(500);
    });

    $('.chavez').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Christopher Chavez");
        $('#place').html("4th Year");
        $('#year').html("<strong>Major:</strong> Anthropology");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Fire OG");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Care-uh-mel");
        $('#quote').html("<strong>Favorite Quote:</strong> 'Anyone notice andrew n dan did the same audition song?' - Anonymous");
        $('#fav-song').html("<strong>Audition Song:</strong> Strawberry Swing, by Frank Ocean");
        $('#her-bio').html("Chris goes to bed around 11pm and wakes up around 7am, he doesn’t have office hours, he likes evanston a lot, whip appeal.");
        $('#member-information').fadeIn(500);
    });

    $('.michael').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Michael Hanna");
        $('#place').html("Business Director | 3rd Year");
        $('#year').html("<strong>Major:</strong> Linguistics & Computer Science");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Banana Tree (Gros Michel cultivar)");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Strawberry");
        $('#quote').html("<strong>Favorite Quote:</strong> 'Do people really have favorite quotes...?' - Me");
        $('#fav-song').html("<strong>Audition Song:</strong> Empty Chairs at Empty Tables, from Les Miserables");
        $('#her-bio').html("Michael is a third-year from Massachusetts. He is passionate about languages, and loves traveling to places where other languages are spoken. In his free time, he enjoys playing games (indie freeware, like Cave Story or OFF), and reading books (like The Buried Giant).");
        $('#member-information').fadeIn(500);
    });

    $('.aidan').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Aidan Coffey");
        $('#place').html("3rd Year");
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
        $('#place').html("2nd Year");
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
        $('#place').html("Music Director | 2nd Year");
        $('#year').html("<strong>Major:</strong> Linguistics & Computer Science");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Northern Magnolia");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Caramel");
        $('#quote').html("<strong>Favorite Quote:</strong> 'Consent is my ish.' – Benjamin Charles Prevor III");
        $('#fav-song').html("<strong>Audition Song:</strong> Electric Love, by BØRNS");
        $('#her-bio').html("Zack is a second year Linguistics and Computer Science major from Philadelphia, PA. He will secretly laugh at you every time you call a hoagie a sub. He enjoys the outdoors, Just Dance, melted cheese, piña coladas, and getting caught in the rain.");
        $('#member-information').fadeIn(500);
    });

    $('.andrew').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Andrew Deng");
        $('#place').html("Vice President | 1st Year");
        $('#year').html("<strong>Major:</strong> you tell me");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Evergreen");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Caramel");
        $('#quote').html("<strong>Favorite Quote:</strong> 'Lesley I typed your symptoms into the thing up here and it says you might have network connectivity problems' - Andy Dwyer");
        $('#fav-song').html("<strong>Audition Song:</strong> Like I'm Gonna Lose You, by Meghan Trainor");
        $('#her-bio').html("Andrew is a first year with a little too much hometown pride for Boston. He is an undecided major on a pre-med track, though highly doubts he will survive. When not singing for RfC Andrew is often napping, playing basketball, or just singing in his room instead while his suite mates plot ways to shut him up. His most redeeming quality is his willingness to UberEats McDonald’s at any time of day.");
        $('#member-information').fadeIn(500);
    });

    $('.tim').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Timothy Granzow");
        $('#place').html("Assistant Music Director | 1st Year");
        $('#year').html("<strong>Major:</strong> Geophysical Sciences and Environmental Science");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Ginkgo");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Strawberry");
        $('#quote').html("<strong>Favorite Quote:</strong> 'Sometimes science is more art than science, Morty' - Rick Sanchez ");
        $('#fav-song').html("<strong>Audition Song:</strong> Hallelujah by Leonard Cohen");
        $('#her-bio').html("Tim is a first year in RFC and at UChicago! He’s from New Jersey and loves a cappella, beat boxing, and just music in general! He was totally stoked to perform at the international ICCA’s a cappella championship competition with the boys. Outside of music, Tim loves nature and can often be found messing around in the local park.");
        $('#member-information').fadeIn(500);
    });

    $('.jeremy').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Jeremy Lindenfeld");
        $('#place').html("3rd Year");
        $('#year').html("<strong>Major:</strong> Creative Writing");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Red Mangrove");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Plain");
        $('#quote').html("<strong>Favorite Quote:</strong> 'I'm gonna roll myself up in a big ball and die' – Frank Sinatra");
        $('#fav-song').html("<strong>Audition Song:</strong> My Way, by Frank Sinatra");
        $('#her-bio').html("Jeremy is a third year Creative Writing major from Miami, Florida. He is excited to be a new member of RfC. Outside of a capella, Jeremy likes to write music, do film photography, and adventure into nature. If you challenge him to Mario Kart for the Nintendo Switch, just know you’ll be feeling the wrath of Waluigi.");
        $('#member-information').fadeIn(500);
    });

    $('.jonathan').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Jonathan Rockhill");
        $('#place').html("President | 3rd Year");
        $('#year').html("<strong>Major:</strong> Physics");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Pando (the quaking aspen colony)");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Caramel");
        $('#quote').html("<strong>Favorite Quote:</strong> 'Can I offer you an egg in this trying time?' - Frank Reynolds");
        $('#fav-song').html("<strong>Audition Song:</strong> Corner of the Sky, from Pippins");
        $('#her-bio').html("Jonathan is a third year and a proud New York City native. When not singing, he is usually working on something that involves coding. When not doing that, he can be found playing ultimate, playing a board game, exploring Chicago, cooking something delicious or mixing a cocktail with his friends (he’s a certified bartender!).");
        $('#member-information').fadeIn(500);
    });

    $('.chase').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Chase Leito");
        $('#place').html("Artistic Director | 1st Year");
        $('#year').html("<strong>Major:</strong> Sociology");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Maple");
        $('#churro').html("<strong>Favorite Churro Flavor:</strong> Caramel");
        $('#quote').html("<strong>Favorite Quote:</strong> 'You cannot escape the responsibility of tomorrow by evading it today'- Abraham Lincoln");
        $('#fav-song').html("<strong>Audition Song:</strong> Stand Up For Love, by Destiny's Child");
        $('#her-bio').html("Chase is a first year from Arizona, one of the hottest states in the country. He is very excited to be a new member of R of C. Chase enjoys exploring parts of the city, being in ACSA, and watching Netflix.");
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