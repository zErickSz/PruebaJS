        // 🎯 INSTRUCCIONES PARA PRACTICAR:
        
        // 1. Panel Desplegable: 
        //    - Selecciona el botón #togglePanel y el div #hiddenPanel
        //    - Agrega un event listener al botón para mostrar/ocultar el panel
        //    - Cambia el texto del botón entre "Mostrar Panel" y "Ocultar Panel"
        
        const togglePanelBtn = document.getElementById("togglePanel");
        const hiddenPanel = document.getElementById("hiddenPanel");

        if (togglePanelBtn){
                togglePanelBtn.addEventListener("click", () => {
                        if (hiddenPanel.style.display === "none" || hiddenPanel.style.display === "") {
                                hiddenPanel.style.display = "block";
                                togglePanelBtn.textContent = "Ocultar Panel";
                        } else {
                                hiddenPanel.style.display = "none";
                                togglePanelBtn.textContent = "Mostrar Panel";
                        }
                });
        }

        // 2. Contador:
        //    - Selecciona los botones #incrementBtn, #decrementBtn, #resetBtn y el div #counter
        //    - Crea una variable para guardar el valor del contador
        //    - Agrega event listeners para aumentar, disminuir y resetear
        
        const sumaBtn = document.getElementById("incrementBtn");
        const restaBtn = document.getElementById ("decrementBtn");
        const resetBtn = document.getElementById ("resetBtn");
        let cont = document.getElementById("counter");

        let contador = 0;
        
        if (sumaBtn){
                sumaBtn.addEventListener("click", () => {
                       contador++;
                       cont.textContent = contador;          
                })
        }

        if (restaBtn){
                restaBtn.addEventListener("click", () => {
                        contador--;
                        cont.textContent = contador;
                })
        }

        if (resetBtn){
                resetBtn.addEventListener("click", () => {
                        contador = 0;
                        cont.textContent = contador;
                })
        }
        // 3. Lista de Tareas:
        //    - Selecciona el input #taskInput, botón #addTaskBtn y div #taskList
        //    - Al hacer clic en agregar, crea un nuevo div con la tarea y un botón eliminar
        //    - El botón eliminar debe quitar esa tarea específica
        
        const taskInput = document.getElementById("taskInput");
        const addTaskBtn = document.getElementById("addTaskBtn");
        const taskList = document.getElementById("taskList");
        const text = document.getElementById("text");
        
        if (addTaskBtn){
                addTaskBtn.addEventListener("click", () => {
                       if (taskInput.value === "" || taskInput.value.trim() === ""){
                        return;
                       } 
                       else {

                        if (text){
                          text.style.display = "none";
                        }
                        // Agregar Tarea
                        const newTask  = document.createElement("div");
                        newTask.className = "task-item";
                        newTask.textContent = taskInput.value;
                        

                        // Agregar Boton eliminar
                        const deleteBtn = document.createElement("button");
                        deleteBtn.className = "delete-btn";
                        deleteBtn.textContent = "x";
                        
                        // Funcionalidad boton eliminar
                        deleteBtn.addEventListener("click", () =>{
                                newTask.remove();

                        });

                        // Agregar Botones / Tareas
                        newTask.appendChild(deleteBtn);
                        taskList.appendChild(newTask);

                        taskInput.value = "";
                       }
                });
        }

        // 4. Cambio de Tema:
        //    - Selecciona el botón #themeToggle
        //    - Agrega/quita la clase 'dark-theme' al body
        //    - Cambia el texto del botón según el tema actual
        
        const themeToogleBtn = document.getElementById("themeToggle")

        if (themeToogleBtn){
                themeToogleBtn.addEventListener("click", () =>{
                        document.body.classList.toggle("dark-theme");

                        if (document.body.classList.contains("dark-theme")){
                                themeToogleBtn.textContent = "☀️ Cambiar a Tema Claro";
                        } else {
                                themeToogleBtn.textContent = "🌙 Cambiar a Tema Oscuro";
                        }
                });
        }
        // 5. Calculadora:
        //    - Selecciona los inputs #num1, #num2, select #operation, botón #calculateBtn y div #calculatorResult
        //    - Realiza la operación seleccionada con los dos números
        //    - Muestra el resultado en el div de resultado
        

        const calculateBtn = document.getElementById("calculateBtn");
        const num1 = document.getElementById("num1");
        const num2 = document.getElementById("num2");
        const operation = document.getElementById("operation");
        const calculatorResult = document.getElementById("calculatorResult");

        if (calculateBtn){
                calculateBtn.addEventListener("click", () => {
                        // Valores
                        const number1 = parseFloat(num1.value);
                        const number2 = parseFloat(num2.value);
                        const selectedOperation = operation.value;

                        let result;

                        //Verificar que los numeros sean validos
                        if (isNaN(number1) || isNaN(number2)) {
                                calculatorResult.textContent = "Por favor ingrese numeros validos";
                                calculatorResult.className = "result-message result-error";
                                calculatorResult.style.display = "block";
                                return;
                        }

                        // Operaciones
                        if (selectedOperation === "add"){
                                result = number1 + number2;
                        } else if (selectedOperation === "subtract") {
                                result = number1 - number2;
                        } else if (selectedOperation === "multiply") {
                                result = number1 * number2;
                        } else if (selectedOperation === "divide") {
                                if (number2 === 0) {
                                        calculatorResult.textContent = "No se puede dividir por cero";
                                        calculatorResult.className = "result-message result-error";
                                        calculatorResult.style.display = "block";
                                        return;   
                                }
                                result = number1 / number2;
                        }

                        // Resultado mostrar
                        calculatorResult.textContent = `Resultado: ${result}`;
                        calculatorResult.className = "result-message result-success";
                        calculatorResult.style.display = "block";
                });
        }

        // 6. Galería:
        //    - Selecciona todas las imágenes existentes y el botón #addImageBtn
        //    - Al hacer clic en una imagen, cambia su color de fondo aleatoriamente
        //    - Al hacer clic en "Agregar Imagen", crea una nueva imagen en la galería

        const addImageBtn = document.getElementById("addImageBtn");
        const imageGallery = document.getElementById("imageGallery");

        if (addImageBtn) {
                addImageBtn.addEventListener("click", () => {

                });
        }
        
        if (imageGallery) {
                imageGallery.addEventListener("click", () => {
                        
                });
        }