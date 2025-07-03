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
        


        // 5. Calculadora:
        //    - Selecciona los inputs #num1, #num2, select #operation, botón #calculateBtn y div #calculatorResult
        //    - Realiza la operación seleccionada con los dos números
        //    - Muestra el resultado en el div de resultado
        


        // 6. Galería:
        //    - Selecciona todas las imágenes existentes y el botón #addImageBtn
        //    - Al hacer clic en una imagen, cambia su color de fondo aleatoriamente
        //    - Al hacer clic en "Agregar Imagen", crea una nueva imagen en la galería
        
