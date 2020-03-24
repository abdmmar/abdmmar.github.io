<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abdullah Ammar | Graphic Design Enthusiast</title>

    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="asset/Logo/Logo.png">
    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap" rel="stylesheet">
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
    <header>
        <a href="#" class="logo"><img src="asset/Logo/LogoHeader.png" alt="Ammar's Logo"></a>
        <nav role="navigation" class="main-menu"> 
            <ul class="menu">
                <li>&#8618;</li>
                <li><a href="index.php">Home</a></li>
                <li><a href="index.php?p=work">Work</a></li>
                <li><a href="index.php?p=playground">Playground</a></li>
                <li><a href="index.php?p=about">About</a></li>
            </ul>
            <!-- &#9776; -->
        </nav>
    </header>

    
    <main>       
            <?php
                $pages_dir = 'pages';
                if(!empty($_GET['p'])){
                    $pages = scandir($pages_dir, 0);
                    unset($pages[0], $pages[1]);

                    $p = $_GET['p'];
                    if(in_array($p.'.php', $pages)){
                        include($pages_dir.'/'.$p.'.php');
                    } else {
                        echo '<h1></br>4😕4</h1>';
                        echo '<h2>Page not found!</h2>';
                        echo '</br>';
                        echo '<a href="index.php">&larr; Go Home</a>';
                    }
                } else {
                    include($pages_dir.'/home.php');
                }
            ?>    
    </main>
    
    <footer>
        &copy; Copyright 2020, Abdullah Ammar
        <nav role="email">
            <ul class="email">
                <li>&#8618;</li>
                <li><a href="mailto:@abd.ammar.mar@gmail.com">abd.ammar.mar@gmail.com</a></li>
            </ul>
        </nav>
        <nav role="social-media">
            <ul class="social-media">
                <li>&#8618;</li>
                <li><a href="https://www.instagram.com/abdmmar">Instagram</a></li>
                <li><a href="https://www.behance.net/abdmmar">Behance</a></li>
                <li><a href="https://www.dribbble.com/abdmmar">Dribbble</a></li>
            </ul>
        </nav>
        <!-- <span title="Back To Top">&#9651;</span> -->
    </footer>
    <script>
        
        $(window).on("scroll", function(){
            if($(window).scrollTop()){
                $('header').addClass('under');
            } else{
                $('header').removeClass('under');
            }
        });

        function openPlayground(evt, playgroundName) {
            var i, tabcontent, tablinks;

            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            document.getElementById(playgroundName).style.display = "block";
            evt.currentTarget.className += " active";
            }
        document.getElementById("defaultOpen").click();
    </script>
</body>
</html>