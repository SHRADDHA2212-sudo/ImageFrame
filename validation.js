function fileValidation() { 
    var fileInput =  
        document.getElementById('file'); 
      
    var filePath = fileInput.value; 
    var filename = filePath.replace(/^.*[\\\/]/, '');
    // Allowing file type 
    var allowedExtensions =  /(\.jpg|\.jpeg|\.png|\.gif)$/i; 
      
    if (!allowedExtensions.exec(filePath)) { 
        alert('Invalid file type'); 
        fileInput.value = ''; 
        return false; 
    }  
    else  
    { 
      
        // Image preview 
        if (fileInput.files && fileInput.files[0])/* { 
            var reader = new FileReader(); 
            reader.onload = function(e) { 
                document.getElementById( 
                    'imagePreview').innerHTML =  
                    '<img width="400" src="' + e.target.result 
                    + ' "/>'; 
            }; 
            reader.readAsDataURL(fileInput.files[0]); 
        }// if */
        {
            for (var i = 0; i < file.files.length; i++)
            {   
                var file1 = fileInput.files[i];
                if (allowedExtensions.test(file1.name.toLowerCase())) {
                    var reader = new FileReader();
                    reader.onload = function (e) 
                    {
                        var img = document.createElement("IMG");
                       
                        img.height = "300";
                        img.width = "400";
                        img.style.borderRadius="20px";
                        
                        img.src = e.target.result;
                        dvPreview.appendChild(img,filename);
                        //dvPreview.innerHTML="<span style='border-radius:25px;'> </span>";
                    }

                    reader.readAsDataURL(file1);
                }
                else{
                    alert(file1.name + " is not a valid image file.");
                    dvPreview.innerHTML = "";
                    return false;
                }
            }
        }// if */
    } //else
} // function