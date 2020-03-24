<h1>&#x1F50E;</br>
    Playground</h1>

<section class="playgrounds">
    <div class="tab">
        <button class="tablinks" onclick="openPlayground(event, 'Design')" id="defaultOpen"> Design</button>
        <button class="tablinks" onclick="openPlayground(event, 'Code')">Code</button>
        <button class="tablinks" onclick="openPlayground(event, 'Photography')">Photography</button>
    </div>

    <div id="Design" class="tabcontent">
        <ul class="playground">
            
            <?php
                for ($i=1; $i <= 14; $i++) { 
                    echo " <li> <img src='asset/playground/$i.png'> </li>";
                }
            ?>
        </ul>
    </div>

    <div id="Code" class="tabcontent">
        <h3>Code</h3>
        <p>Code is the capital of France.</p> 
    </div>

    <div id="Photography" class="tabcontent">
        <h3>Photography</h3>
        <p>Photography is the capital of Japan.</p>
    </div>
    
        
</section>