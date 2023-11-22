<script>
  import img from "../assets/desarrolladora.png";

  let data = [];
  let frameworks = [];
  let hobbies = [];

  async function fetchData() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/api/profile`,
      {
        method: "GET",
      }
    );

    if (response.ok) {
      data = await response.json();
      if (data && data.length > 0) {
        data = data[0];
        console.log(data);
        frameworks = data.frameworks;
        console.log(frameworks);
        hobbies = data.hobbies;
        console.log(hobbies);
      } else {
        console.error("El servidor no devolvió datos válidos.");
      }
    } else {
      console.error("Error al cargar datos desde la API");
    }
  } catch (err) {
    console.error("Error al realizar la solicitud a la API:", err);
  }
}

  fetchData();

  let name;
  let lastname;
  let summary;
  let city;
  let country;
  let email;
  let hobbyName;
  let hobbyDescription;
  let frameworkName;
  let frameworkLevel;
  let frameworkYear;
  function handleName(e) {
    name = e.target.value;
    data[0] = name;
  }
  function handleLastname(e) {
    lastname = e.target.value;
  }
  function handleSummary(e) {
    summary = e.target.value;
  }
  function handleCity(e) {
    city = e.target.value;
  }
  function handleCountry(e) {
    country = e.target.value;
  }
  function handleEmail(e) {
    email = e.target.value;
  }
  function handleHobbyName(e) {
    hobbyName = e.target.value;
  }
  function handleHobbyDescription(e) {
    hobbyDescription = e.target.value;
  }
  function handleFrameworkName(e) {
    frameworkName = e.target.value;
  }
  function handleFrameworkLevel(e) {
    frameworkLevel = e.target.value;
  }
  function handleFrameworkYear(e) {
    frameworkYear = e.target.value;
  }

  async function saveChanges() {
  const formData = {
    name,
    lastname,
    summary,
    city,
    country,
    email,
    hobbies,
    frameworks,
  };

  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/api/profile`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      console.log("Cambios guardados exitosamente!");
      edit = 0;
      window.location.reload();
    } else {
      console.error("Error al guardar cambios");
    }
  } catch (err) {
    console.error("Error al guardar cambios:", err);
  }
}


async function deleteFramework(_id) {
  console.log(_id);
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/api/profile/frameworks/${_id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      console.log("Framework eliminado exitosamente!");
      window.location.reload()
    } else {
      console.error("Error al eliminar el framework:", response.statusText);
    }
  } catch (err) {
    console.error("Error al realizar la solicitud de eliminación:", err);
  }
}


  async function deleteHobby(_id) {
    console.log(_id);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/api/profile/hobby/${_id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("Hobby eliminado exitosamente!");
        window.location.reload()
      } else {
        console.error("Error al eliminar el hobby:", response.statusText);
      }
    } catch (err) {
      console.error("Error al realizar la solicitud de eliminación:", err);
    }
  }


  let edit = 0;

  function editProfile() {
    edit = 1;
  }
</script>

<body>
  <div class="contianer">
    <!-- Perfil -->
    <div class="d-flex" style="text-align: end; align-items: center">
      <h3 class="m-4">Perfil</h3>
      <button
        class="button-confirm bg-danger border border-danger rounded"
        style="--bs-bg-opacity: .5;"
        on:click={editProfile}>Editar</button
      >
    </div>

    <div class="row m-4">
      <div
        class="card m-1 bg-danger border border-danger rounded idwm"
        style="--bs-bg-opacity: .5; text-align: center"
      >
        <div>
          <img
            src={img}
            class="card-img-top"
            alt="image-profile"
            style="width: 100px;"
          />
        </div>
        <div class="card-body">
          <h4 class="card-title">{data.name} {data.lastname}</h4>
          {#if edit > 0}
            <div class="d-flex">
              <input
                class="input-edit w-50"
                bin
                on:change={handleName}
                bind:value={data.name}
                placeholder="Nombre"
              />
              <input
                class="input-edit w-50"
                on:change={handleLastname}
                bind:value={data.lastname}
                placeholder="Nombre"
              />
            </div>
          {/if}
          <h6 class="card-text">{data.summary}</h6>
          {#if edit > 0}
            <textarea
              class="input-edit w-100"
              on:change={handleSummary}
              bind:value={data.summary}
              placeholder="Nombre"
            />
          {/if}
        </div>
      </div>
      <!-- Datos personales -->
      <h3 class="m-4">Datos personales</h3>
      <div class="row m-4" style="text-align: center">
        <div
          class="col m-1 p-2 bg-warning border border-warning rounded idwm"
          style="--bs-bg-opacity: .5"
        >
          <h5>Ciudad: {data.city}</h5>
          {#if edit > 0}
            <input
              class="input-edit w-100"
              on:change={handleCity}
              bind:value={data.city}
              placeholder="Ciudad"
            />
          {/if}
        </div>
        <div
          class="col m-1 p-2 bg-warning border border-warning rounded idwm"
          style="--bs-bg-opacity: .5"
        >
          <h5>País: {data.country}</h5>
          {#if edit > 0}
            <input
              class="input-edit w-100"
              on:change={handleCountry}
              bind:value={data.country}
              placeholder="País"
            />
          {/if}
        </div>
        <div
          class="col m-1 p-2 bg-warning border border-warning rounded idwm"
          style="--bs-bg-opacity: .5"
        >
          <h5>Correo: {data.email}</h5>
          {#if edit > 0}
            <input
              class="input-edit w-100"
              on:change={handleEmail}
              bind:value={data.email}
              placeholder="Email"
            />
          {/if}
        </div>
      </div>
      <!-- Hobbies -->
      <h3 class="m-4">Hobbies</h3>
      <div class="row m-4">
        {#each hobbies as hobby (hobby._id)}
          <div
            class="col m-1 p-2 bg-success border border-success rounded idwm"
            style="--bs-bg-opacity: .5; text-align: center"
          >
            <h5>
              {hobby.name}: {hobby.description}
            </h5>
            {#if edit > 0}
              <input
                class="input-edit w-100"
                on:change={handleHobbyName}
                bind:value={hobby.name}
                placeholder="Nombre"
              />
              <input
                class="input-edit w-100"
                on:change={handleHobbyDescription}
                bind:value={hobby.description}
                placeholder="Descripción"
              />
              
            {/if}
            
          </div>
          <button class="button-confirm bg-danger border border-danger rounded"
              style="--bs-bg-opacity: .5;" on:click={() => deleteHobby(hobby._id)}>Eliminar</button>
        {/each}
      </div>
      <!-- Frameworks -->
      <h3 class="m-4">Frameworks</h3>
      <div class="row m-4">
        {#each frameworks as framework (framework._id)}
          <div
            class="col m-1 p-2 bg-info border border-info rounded idwm"
            style="--bs-bg-opacity: .5; text-align: center"
          >
            <h5>{framework.name}, {framework.level}</h5>
            <h6>{framework.year}</h6>
            {#if edit > 0}
              <input
                class="input-edit w-100"
                on:change={handleFrameworkName}
                bind:value={framework.name}
                placeholder="Nombre"
              />
              <input
                class="input-edit w-100"
                on:change={handleFrameworkLevel}
                bind:value={framework.level}
                placeholder="Nivel"
              />
              <input
                class="input-edit w-100"
                on:change={handleFrameworkYear}
                bind:value={framework.year}
                placeholder="Año"
              />
              
            {/if}
          </div>
          <button class="button-confirm bg-danger border border-danger rounded"
              style="--bs-bg-opacity: .5;" on:click={() => deleteFramework(framework._id)}
                >Eliminar</button
              >
        {/each}
      </div>
      {#if edit > 0}
      <button
        class="button-confirm bg-success border border-success rounded"
        style="--bs-bg-opacity: .5;"
        on:click={saveChanges}>Guardar</button
      >
      {/if}
    </div>
  </div></body
>
