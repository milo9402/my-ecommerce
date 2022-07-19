import React from 'react'
import type { NextPage } from 'next'

const About: NextPage = () => {
    return (
        <>

            <div 
                className="py-20 bg-cover bg-no-repeat bg-fixed"
                style={{backgroundImage: "url(https://plopdo.com/wp-content/uploads/2021/07/Screenshot-1-1210x642.png?crop=1)"}}
            >
                <div className="container m-auto text-center px-6 opacity-100">
                    <h2 className="text-4xl font-bold mb-2 text-white">Amor por el desarrollo Frontend</h2>
                    <h3 className="text-2xl font-semibold mb-8 text-gray-200">Soy Camilo Castrillon, ingeniero de sistemas y desarrollador Frontend y quiero que conozcas un poco de acerca de mi.</h3>
                </div>
            </div>
        
                <section className="container mx-auto px-6 p-10 dark:bg-gray-400 bg-gray-100">
                <h2 className="dark:text-white text-4xl font-bold text-center text-gray-800 mb-8">Mi trabajo</h2>
                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2 pr-10">
                    <h4 className=" dark:text-white text-3xl text-gray-800 font-bold mb-3">Softseguros</h4>
                    <p className=" dark:text-white text-gray-600 mb-8">
                        Softseguros es una  plataforma para la gestión y administración de agencias y corredurías de seguros en Latinoamérica. La solución está completamente en la nube con sus versiones web y móvil.
                        Este software para la gestión de seguros, permite controlar detalladamente la base de datos de clientes, renovaciones de pólizas, alertas en cartera y cobranza, además del seguimiento a comisiones y tareas en general dentro de las agencias de seguro.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                    <img style={{width:'80%'}} className="rounded-lg" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCA8PDw8PDw8PDw8PDw8PDw8PERESDw8SGBQZHBgUGRgcIS4lHB44HxkYJjomOC8/NzU1GjE7QDszQjA0NjQBDAwMEA8QHhIRHjEhJCc0PzU0NDQ0NDQxPzcxPjQxMzQxPzY0NDE0MTU0NDY0NDExNDQ0NDQxMTQxNDExMTQ0NP/AABEIAJUBUwMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAABAAIFBgMEB//EAD8QAAICAgECBAMGAwUFCQAAAAECAAMEERIFIQYTMUEiUWEUMnFygZGCsbIjM0JSYgckc4OSFRY1NnR1obPB/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECAwQGBf/EACkRAQEAAgEDAwIGAwAAAAAAAAABAhESAyExE0FRcfBhgaGx0eEEFJH/2gAMAwEAAhEDEQA/APlzKXR3DqVJZiPkRs9wR6zzdOIU8kblvsp2V17Ee3rG6xuTryPHm547OvX5Txn0c3p+ZVKEJQw3CUClKG5FO4bhuG5BkrkenyI/SYw3KQW4S3DcKYQ3CA7hLcNwLcZkFHEnff5bHzHbXr+v0nnJsW5TGW5BSlDcBhuENyKYbhuUgtylCFMx3DcoFuEolu2tfr7zIJbhuEKYS3DcC3CUpBShuEKdxmEpB0N/94/52/mZ5T0vPxv+d/5meU9U8OR3CUIDDcJSChKEBhCEincJQ3ApbhDcBhuUNyBhuUxkFKUNwGG5bhIqhLcNyB3DcpQKENwhTuEJTIpS3CA7hCG4Uw3CUgpSmTVOEVyjhGJCuVPBiPUBvTfrG1Ybhuev2d+Bf4dLokF1DgE6B473rc8ZBQluW5BblCUDoL/vv+d/5mee5nkH43/O/wDMzz3PVPDkYbhCAw3KG5FW5QhAYbhLcChuMJBQ3LcxkGUxlKBShuEincIQ3IHcNylApQmO4U7huEoFKW4bmQ7huEtwqhuUIFKUNyKZjuUJBT0qvdN8GK8hpgPRvxE8pbkCzEnZOye5J9TDcoQKW4bhIHcpjKB0F/37Pzv/ADMwmWR/eP8Anf8AmZ57nqnhzdl4Tw+m5aNXbiO19NLW2WedYqPpuwAVhrsR7e09ej4PTMqrLyUwL3SnywlC23G5jx23HT9/UftNb4IzqcezKa6xaw2MyqWOuTbHYfWfT4MzqqsPLqbMTDtsZPLsYBiul+8F2N/vPD1ZnLlZb7e99/LvjrU3J7/DRdeWpb9U4t2GnBd05HPzOWztviJOiNftOi8L+GcfJxDZk/Dbku9eIeTroqrHYUEBu6udHfZfrNB18c8pQc5M3mlanJKhETbEcSAT2Hr+s6bqHivDxmx6KMZMxMStPJvFxXg3HR4jidnWtnfuRNdS53DHHHe/v5Zx48rcmk8KdGryMyyjJDf2COWpVuJsdWCld7HzPvPtGJg39Qw8YYGRil3sGTTdZYAyislOPxb9Qe4IHb33PfPq6bkZtuQnUvszWpXbTZXvVd3cNyPbXYKdbGyx79p9+R1vDF/S0fLTKtx7Xa7N4hECmp17kdu5K9gT93vMZ55W7m/HjvNdmpJJrt5avrXScU2DFxenZWPa2SlK5dpvOOw5EEgliCNAn8BPbKxej41xwmxMrIdAgyMis2sUZgCDxVvkQTofTudx671ThYuVV1WvLVMtLq8IIF4ryPw8+R9FJG9e8+pM3AbKPUaeqfZVtCHJxmrU2vwA+Eb2R6DegffR7zG8+M3br8/P3+S6m/b9PDRU9Jxz07qOQarRZRkBcdri6WLWSmuSAhSdMfb3n0dN6Li2YfS7nqLWZPUPIubnYOde7vh0G0PuL3HftPvTxDh556jjZFn2WvJas0WuO2lVQC3sDtA2ifQ6nnZ1HAxl6VhU5K3rjZgyLsgDVYHx77+nq57AnQXvLcuprXeXe/fxo44+e2nr1Dw7gOnUUqxr8V8FOS3my003HgX0OZII7aPy36zVeCehY2St1+YN0I9VFYLOga52UDupB38SjX+qbjqXXsbPGdhW5S0oGD4mSGIqsGgeD6+8ORP4j6rPks69hYOHiYaU1dQIHnXlbiqJeGDbBCnkeROvkFEkvV48e+7+31LMd77afB0Lw7W3VrcHJUvXStzEcmUuo48DtSD6Opn3YPhGpur349ik4dSC9RyYc1s7VpyB5fe5999/L+s2mP1vp75FfUjkU03P096LaGcFls5oyj07ns437gCayvxWn/Z2AnMDJF+JVkn/ABrTTZy5sfcEKP8ArMXPq3xudtfzTWE8/V5p4Zw67+pX5PJcHBsCJSjNzdiiOF5E8vR0A77Jb1Gu/l/2Z07qWNkW9PptxcjFTm1VjEi1dE9ts3+UjY139ZssrrnT7sjqGHdcBi5pqtTJrO1W0V1qQe3bvWp36djufBXlYPScXKXGy1zcvKTy1aoAJWumAJ0SBrkT67J12ES5353218fmax/DTLB6Rg09Oxsu7CyM/wC0KXusoZv93Hy4qw9O4381OyOwnE5DIXc1qy1l3NaseTKmzxBPuda7zvPDT4WGarqus8KggOTh2L/ePw0eKk7Xv37Antrc4vrWTVdl5FtC8antZkXXH4SfXXtv119Z16VvO73fvwznJqPjmO5QnpczCUtzItw3KEKYbhuEDNkIAOuxmEyLkjXbQ+g3+/qZhuRTDcNwkDCUNwKW5bhIGENw3IHcJQgUtw3DcNGUJQOhyPvv+d/5meUzyPvv+d/5meU9E8OLa4/Qr7MevJU1CuzITGUMzhw7uFBI4647Prv9I9Q8P5GNk04tvDnkNWlTqzGpi7BR8XHfYkb7f/k6PpH/AIRif+74/wD96ze5V1WZ1F8K7S24eRiZeK+u7Kq1u6fX3/ff+GeLLr5zK/E27zCWf8cXR4Py7LMioWYytisi2lncLt6w4Knh3GmHrqfNZ4Zy/tQxE8q601C0tU5apELEbZiBruPl7j1ncXPSr9fN6NbSGxzZWrEMy/Zq9gEEa/eazwvdj3J1Srp1TY1tmMvkozkuWCuOQYkkfEy+/bYknX6mrfp7dvY4Y700PVPB2ZjVNdum5EBNnksxasD1JBA7COJ4Ny76qblsxQL0D1K1rixhretcNb19ZuPAWBkYlmXdk1vj4q0MLBcpRWYEEEA+oCh+/wDq+s3XTasSzH6L5wItWg2Yiliql1RDxJHvrRH5TGfXznaXeveQmGN7+HB9N8M5eTffjqK67cfXmrazADZ0ACoO/n8tTx6L0HIzrLKqQivSN2G5mVVO+PE8QTvYPt/hM7HoudfS/Xc3IqCX1iotV6gcFfioPuOPHv773N5Q2PiZNXk6Y9XyXuJ+Va45YkfTlo/8wyZf5Gfea9u370nTxun5Z0vpF+XkfZqeIsAcszkhEC+pJAJ9dD09SJ45mBbTkNjOm7ls8vgu25sT8PH3O9gj8Z3/AEbA+zV9UyDfTiW5OVk42NdcyqtarY45DetnfI6/0CfRnVUDqfTeol6nqyA+M1tbBqvtARgjBvr8S/wia/2byvxr9Z3PT7OZTwDnlAxbGrYjYqexuevfZCkb/X9Zp8noGRXVi3fBYMw8aEqZncn2BGtfsTNn4l6B1J8+9zRdfzsZq7VUsnl72g5ei6Ghr6TqOkXVpV4fNmgGW1EJ7AWNSQv79x+LRerljJluXfx9KTGW61pqqvCWdXhWUpTgm+0crSzs2SUGiqJteCkMPXej8+25znT/AA1l5NORdWq/7qzpZUxdby6rsqq8dE/TY7ze0dF6iOu+aarQPtjWnI0fKNHI9ufp3T4ePr7ToG6suOnW8ugK4qzaNga05WuhbB9O/Mb+feY9XPHtLLvv/S8JfPZ+cUdItswrs5Wr8iixa3UlvMLMUAKjjoj419/nNdufpvXMbHXouffitunNuoy1XWuDNZSrJr27qe3sSR7T8wnfo585b+P8MZ48dGEpbnVhS3CEKYT6LXobTKjofdA3NCfY8ieQ/Dv+M8rruYXaIvHY2ihS3469ZB57hKUClMdwkU7hKbTw1gV5WdjY9pIrdmL6OiyojOVB+vHX6yZZam6sm2rhufpuR4eosoK2V0VCzHsai2kLquwJ5infBCE4g9iW2B3IPc/FR0vCd1sXCr8h2xaKiz3AlbMgI6uhIKXp3BO++wZxnXnw1wr8/wBwnZpiYyZWJj/ZsOxHwWtfl9oOQHXFNnJzyC92Xtr2J9O0ywcPEtpS4YuKqrhWu9trZC115K1ozLagJYptuasP8B17S3rT4OLitw3O0PS8ZscMMfH7Yb5BetrQ3N8XKsHwse6ckTj7jho73Nm/h3BPFPIrHLIpB09gv4nIxUPHvrhxscH32w1JetITCvzeE7bLwcQ0u1eHX59mGuTwBtRAoW0OaG2QHUojlDvkoOvecPuaxz5JZow3KG5oMNw3KBSlKQdBkH43/O/8zPLczyD8b/nf+ozz3PVPDi2GHmZjBMahrXAsF1dNa8j5inlyAA2SNb/SYZGdlDJN1j2Llow5Ow42IyjjojXY6GtanT+AcKxa8vPSrzba62pxq+w52EBm9SP9A39TPn/2h9PNeTXlBSq5dallOtpaoAIOu3px/UGeadTH1bhqf268bx209mf1Bqr7me80ZLKt9pQeXayqFClta3oAdvlPhwWvFqHHNnn7/s/J5eYTr0HHue250z/+Xa//AFp/qaen+zzBYtk5wr8xsep0oQa+O4rvQJ9Dx0P44vUmOGV1O10cbbJtoerdYz7d0Zd1x4MOVTgV6I7jkoA2fQ95h52ddTWw896ML+7dEPDHICn76jt2CnuZ0H+0TAYPj5xrNZyakW9DraXBR2JHqePb/lzb+A/KXprJcN15mY9B36HmioB+pXX6zN6uM6cykn0/dZjblcbXHt1PqeTVeed91XELkMtYKhFBI5Mq9hrZnz4eRnWvU1BvtfETVXloXNKenYAHQ9p+jdL6WmFhXdNLB77sfLvsYe6nSKf2K/sZ8PgXEtxcGvIShrbM6+rkBoGvHBIDnZGxrk315ic/Wxktknns1wu5uuItzc/qOqy1+Vw3YERORXZ0W0o+vr9Z5Y9ubdQ2JULraFJtehK+YXvssdDY7/zneeHum/YutZ1YHwHFe+keg4NYhCj6A8l/hn19Gwqntv6nja+z52E5ZO267+Q5KR9Tv9QfmJcuvjPE7drPqTC3zXEdN6t1i5DTjXZdqKoB4LzKj2HmaJX6d5repZWZxTGyWuUUd0qtXgyb9+43+s6zq+db07pPSkwm8pMivzLrkA2zlFbWyPcsx+ek16CYeILTl9Dw83IAOSt3lrZoK1i8nHt8wob9Jcc+8vGat1+KWdtb76c4fE3UTX5RzL+Gta2Oevlz1y/+Z8NOfelNmOtjLRaQ1lYC8WI1ontv2H7T5ZTvxxniOe6+tepXrQ+KLmGO7cmp7FS3INv02O6gz5Ny3CXUngW4ShuUO4bhKQUobhCncISkFCW5bkFuZU3PW6OjsjowdHU6ZWB2CJhDcg2+X4iyra2qZkRHQo/AMCyH7yAElUU6GwgUHXft2h/3m6hz5faX5BeG+FWtcg29cdctgHn97Y9ZqNymeGPwu78vqXqN4sS0WN5iV+Sj6Ula/LNfHuNfcJG/X39e8+mrxBnVqiJkMEqTy0U11MoTiF4kFTz+FQBvegNCauG4uMvmLutoPEGaAgGQwFbM6DhVoEhwQRx+JdO44nYAYgATFuvZpbmcl+W2blpNgs6OSO3b40Q/Tj20JrIRxx+DdbW3xFnOLFbJYranB1CVKOPErpQF+DszA8db33mvyL3sdnc8nc7Y6C7OvkOwnluESSeIbW5ShAYQ3KBblCUg6DI++/53/qM8p6ZH33/O/wDUZ5z1Tw5Ny3iLIGJRh07x0pYsbKXdLLGO98iCO22J1+HymGT4guuw1w7x53C3zUvsdmuB2e2ye40zD8D9JqNwmPTx+Pfa8q6LpXilsbGGKcXHvrV2f+2Bb4id+npDN8V3PR5GPWmEDd5zNisyMx0e3YjQ9P8ApE53cNzPo4b3peeWtNzZ4ivsw3wr/wC3DWCxb7Xd7qyCOwJPcfeH8RmA69aMKrCRFRabxkLaCefMMzDt6diR+01MpfTx+PfZyrpU8Y5AznzmrqZ3x/s3l7cIqclbt33vYJ/iM+TqnifKv8kVs+JXTUKlrxrbUXQ9CdEbOgB+k0e4bmZ0sJd6Xnk62nxxkKanaiqy2vGbGNrM/KxSUJZvm203/EZr/D/ia/ArupRUsruHdHLaRuPEsuvmNb/ATQyk9LDVml5Zedui6J4svxKPsz005eODta7hvgd70D37b2dEfhqfJ4g8Q357J5gRKqhqqioEIntv6nXbf7Ad5qNwl9PCXlrunK60dwhDc2hhuEpBSlMdwrKY7hKQUobluQUtwluBQ3LcJBblCG4DDctwhpShuG5A7hKUgoS3DcBhCEgdwhLcgpQ3KFdBkn43/O/9RnnM8j77/nf+ozz3PVHFbhuUoFKEx3CspjuUIFKW4bmQ7huUNwqluG4QHcJQ3IGG4QkUwhLcCluW4SBhDcNyB3CEoFKG4uRvsNCGhuENw3IHcJSgUoQ3IGG4S3IKG5Q3AYQhuRTDctwgMoSgdBkn43/O/wDUZ5zPJ++//Eb+ozyJnpjkymO4bhKGEpbmRS3CEKYQ3CB9FFSOG3YEf/ArrpH7f59/CfxH6wVa12HLs2jo1shVTrtv/N3+s8JSKpTHcJA7hKG4DDctwkDuEVUk6HqZiZBbhuUIDCENw0dw3KG5BS3CUClCUgoblCQMNw3CAwlDciqG5bhAYblDcC3DcZ7Yr1DkLUdg2gro/Fq/XuFI03t2PymVeMp76xx72t9QqLv9OR1KXSNxk/ff/iN/UZ9/Q6S7Oqt5Z1XYWChiU7hq+/se37dwZSnfLwxPLWWMCzEKFHJtKPQDfpMZSmmRCUoVQlKASlKRVMZSkBCUoFKUpAQMpSDFW+XY/MSlKBQlKGhCUpASlKBQlKQEJSkFCUpAQlKFEJSgUpShRCUpkYylKBSlKFf/2Q==" alt="Softseguros" />
                    </div>
                </div>
                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2 ">
                    <img style={{width:'80%'}} className="rounded-lg " src="https://ii.ct-stc.com/1/logos/empresas/2021/01/13/servitel-red-interactiva-0610F77FD48FAC31180715thumbnail.png" alt="Servitel" />
                    </div>
                    <div className="w-full md:w-1/2 pl-10">
                    <h4 className="dark:text-white text-3xl text-gray-800 font-bold mb-3">Servitel</h4>
                    <p className="dark:text-white text-gray-600 mb-8">Ofrecemos soluciones integrales de tecnología y Contact Center, con altos estándares de calidad, equipo humano especializado y un excelente servicio.</p>
                    </div>
                </div>
                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2 pr-10">
                    <h4 className="dark:text-white text-3xl text-gray-800 font-bold mb-3">Merqueo</h4>
                    <p className="dark:text-white text-gray-600 mb-8">Merqueo es una compañía de tecnología que opera bajo una plataforma en línea para entrega de mercados a domicilio. Nació en el año 2017 en Colombia y actualmente tiene operación 25 ciudades entre Colombia y Mexico.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                    <img style={{width:'80%'}} className="rounded-lg" src="https://marketing4ecommerce.co/wp-content/uploads/2018/06/merqueo-logo-imagen-merqueo.png" alt="Merqueo" />
                    </div>
                </div>
                </section>
                
                <section className="bg-gray-100 dark:bg-gray-600">
                    <div className="container mx-auto px-6 py-20">
                        <h2 className="text-4xl font-bold text-center dark:text-white text-gray-800 mb-8">Contacto</h2>
                        <div className="flex flex-wrap">
                        
                        <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                            <div className="flex flex-col justify-between h-full dark:bg-gray-400 bg-white rounded shadow py-2">
                            <p className="dark:text-white text-gray-800 text-base px-6 mb-5">Github.</p>
                            <p className="dark:text-white text-gray-500 text-xs md:text-sm px-6">Github</p>
                            </div>
                        </div>
                        
                        <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                            <div className="flex flex-col justify-between h-full dark:bg-gray-400 bg-white rounded shadow py-2">
                            <p className="dark:text-white text-gray-800 text-base px-6 mb-5">Linkedin.</p>
                            <p className="dark:text-white text-gray-500 text-xs md:text-sm px-6">Linkedin</p>
                            </div>
                        </div>
                        
                        <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                            <div className="flex flex-col justify-between h-full dark:bg-gray-400 bg-white rounded shadow py-2">
                            <p className="dark:text-white text-gray-800 text-base px-6 mb-5">Email</p>
                            <p className="dark:text-white text-gray-500 text-xs md:text-sm px-6">Email</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                
        </>
    )
}

export default About;
