const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabia que ibas apretar el de no, pero ya bueno.Lokeaste la pagina como a mi digo JAJJ,sale?')
    });

    const noBtn = document.querySelector('#noBtn');

    noBtn_addEventListener('mouseover',function() {
        const randomX = parseInt(Math.random()*100);
        const randomY = parseInt(Math.random()*100);
        noBtn_style_setProperty('top',randomY+'%');
        noBtn_style_setProperty('left',randomX+'%');
        noBtn_style_setProperty('transform',`translate(-${randomX})%,-${randomY}%)`);
    })