var index = 0;

function Changecolors()
{var colors =["blue","red","orange","yellow","green","purple"];
    document.getElementsByTagName("body")[0].style.background =colors[index++];
    if(index > colors.length - 1)
        index = 0;


}