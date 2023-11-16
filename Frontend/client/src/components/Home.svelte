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
        data = data[0];
        console.log(data);
        frameworks = data.frameworks;
        console.log(frameworks);
        hobbies = data.hobbies;
        console.log(hobbies);
      } else {
        console.error("Error al cargar datos desde la API");
      }
    } catch (err) {
      console.error("Error al realizar la solicitud a la API:", err);
    }
  }

  fetchData();
</script>

<body>
  <div class="contianer">
    <!-- Perfil -->
    <h3 class="m-4">Perfil</h3>
    <div class="row m-4">
      <div class="card m-1 bg-danger border border-danger rounded idwm" style="--bs-bg-opacity: .5; text-align: center">
        <div>
          <img src={img} class="card-img-top" alt="image-profile" style="width: 100px;"/>
        </div>
        <div class="card-body">
          <h4 class="card-title">{data.name} {data.lastname}</h4>
          <h6 class="card-text">{data.summary}</h6>
        </div>
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
      </div>
      <div
        class="col m-1 p-2 bg-warning border border-warning rounded idwm"
        style="--bs-bg-opacity: .5"
      >
        <h5>País: {data.country}</h5>
      </div>
      <div
        class="col m-1 p-2 bg-warning border border-warning rounded idwm"
        style="--bs-bg-opacity: .5"
      >
        <h5>Correo: {data.email}</h5>
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
        </div>
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
          <h5>{framework.name}, {framework.level} </h5>
          <h6>{framework.year}</h6>
        </div>
      {/each}
    </div>
  </div>
</body>
