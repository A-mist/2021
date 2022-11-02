function changeImage()
            {
                element = document.getElementById('myimage')
                console.log(element)
                if(element.src.match('logo'))
                {
                    element.src="../img/店铺街.png";
                }
                else{
                    element.src="../img/店铺logo.png";
                }
            }