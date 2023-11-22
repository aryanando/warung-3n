document.getElementById("default-search")
    .addEventListener("input", (event) => {
        var inputValue = document.getElementById("default-search").value
        if (inputValue.length >= 3) {
            axios.get('/item/?name=' + inputValue).then(res => {
                console.log(res.data);
                if (res.data.data.length > 0) {
                    document.getElementById("item-container").innerHTML = ''
                    var items = (res.data.data);
                    items.forEach(element => {
                        document.getElementById("item-container").innerHTML += (`<div class="mt-3">
                        <div
                            class="p-4 mx-auto text-center bg-white border-indigo-500 rounded shadow h-36 w-96 ">
                            <div class="flex items-center justify-between h-full">
                                <div class="flex flex-col justify-between h-full">
                                    <div class=" p-3 border rounded-xl">
                                        <span class="text-xl">
                                            `+ element.name + `
                                        </span>
                                    </div>
                                    <div class=" p-3">
                                        <span class="text-xs ">
                                            <a class="text-blue-600" href='/item/update/`+ element.id + `'>Edit</a>
                                        </span>
                                    </div>
                                    <div class="text-xs">
                                        <span class="mb-0 text-left text-gray-500 ">
                                            Last Update :
                                        </span>
                                        <span>`+ element.updated_at + `</span>
                                    </div>
                                </div>
                                <div class="flex flex-col justify-between h-full">
                                    <p class="text-2xl font-bold text-gray-900 ">
                                        <span class="text-sm">
                                            Rp.
                                        </span>
                                        <span class=" font-extrabold">`+ element.sell_price + `</span>
                                        <span class="text-gray-300 text-xs">
                                            / `+ element.unit + `
                                        </span>
                                    </p>

                                    <div class="">
                                        <p class="text-sm font-light text-gray-300">
                                            Harga Kulak
                                        </p>
                                        <p class="text-m font-bold text-gray-900 ">
                                            <span class="text-sm">
                                                Rp.
                                            </span>
                                            <span>`+ element.base_price + `</span>
                                            <span class="text-sm text-gray-300">
                                                / `+ element.unit + `
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> `)
                    });

                } else {
                    document.getElementById("item-container").innerHTML = ''
                }
            })
        } else {
            document.getElementById("item-container").innerHTML = ''
        }
    });

