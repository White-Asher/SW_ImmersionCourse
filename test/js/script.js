var box = document.querySelector(".box");
        box.onmouseover = function(){
                box.innerText = '마우스 포인터 올라감';
            }

        box.onmouseout = function() {

                box.innerText = '마우스 포인터 나감';
            
        }