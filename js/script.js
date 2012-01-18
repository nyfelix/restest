/* Author: nyfelix
                <li id="usa">1997 North USA</li>
                <li id="venezuela">2000 Venezuela</li>
                <li id="thailand">2000 Thailand</li>
                <li id="italien">2001 Italien</li>
                <li id="island">2003 Island</li>
                <li id="spanien">2004 Spanien</li>
                <li id="china">2005 China</li>
                <li id="australien">2005 Australien</li>
                <li id="afghanistan">2006 Afghanistan</li>
                <li id="skandinavien">2007 Skandinavien</li>
                <li id="singapur">2007 Singapur</li>
                <li id="indien">2009 Indien/Ladhak</li>
                <li id="gronland">2010 Grönland</li>
                <li id="kanada">2010 Kanada</li>
                <li id="amazonas">2010 Amazonas</li>
                <li id="galapagos">2010 Galapagos</li>
                <li id="peru">2010 Peru</li>
                <li id="chlie">2010 Chlie</li>
                <li id="argentinien">2010 Argentinien</li>
*/



$(document).ready(function(){
    $( '.destinations' ).click(function() {
        $( '.destinations' ).addClass('left');
    });
     $( '#title' ).click(function() {
        $( '.destinations' ).removeClass('left');
    });
});