<script>
    import img from '../assets/crochet.jpg' 

    let data = [];

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
        console.log(data);
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
        <h2 class="m-4">Perfil</h2>
        <div class="row m-4">
            <div class="col m-1 border border-danger rounded idwm-center idwm" style="--bs-bg-opacity: .5; background-color: white">
                <img src={img} alt="image-profile" class="w-100"/>
            </div>
            <div class="col m-1 bg-danger border border-danger rounded idwm-center idwm" style="--bs-bg-opacity: .5;">
                <h3>{data.name} {data.lastname}</h3>
            </div>
            <div class="col m-1 border border-danger rounded idwm-center idwm" style="--bs-bg-opacity: .5; background-color: white">
                <h6 style="text-align: center;">{data.summary}</h6>
            </div>
        </div>
        <h2 class="m-4">Datos personales</h2>
        <div class="row m-4">
            <div class="col m-1 bg-info border border-info rounded idwm" style="--bs-bg-opacity: .5;">
                <p class="pt-3">Edad:</p>
                <p>22 años</p>
            </div>
            <div class="col m-1 bg-warning border border-warning rounded idwm" style="--bs-bg-opacity: .5;">
                <p class="pt-3">Ciudad de origen:</p>
                <p>{data.city}, {data.country}</p>
            </div>
            <div class="col m-1 bg-success border border-success rounded idwm" style="--bs-bg-opacity: .5;">
                <p class="pt-3">Correo electrónico:</p>
                <p>{data.email}</p>
            </div>
        </div>
        <h2 class="m-4">Intereses</h2>
        <div class="row m-4">
            <div class="col-6 m-1 bg-secondary border border-secondary rounded idwm" style="--bs-bg-opacity: .5;">
                <h6 class="pt-2">1. Tejer a crochet</h6>
            </div>
        </div>
        <h2 class="m-4">Frameworks</h2>
        <div class="row m-4 w-50">
            {#each data.frameworks as framework (framework.name)}
      <li>
        Nombre: {framework.name}, Nivel: {framework.level}, Año: {framework.year}
      </li>
    {/each}
        </div>
        <h2 class="m-4">Redes sociales</h2>
        <div class="row m-4">
            <h6>1. Github <a href="https://github.com/Valee9" target="_blank">ir a ver</a></h6>
        </div>
    </div>
</body>