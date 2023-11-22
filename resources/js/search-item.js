import dayjs from 'dayjs';

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
                        console.log(dayjs().diff(dayjs(element.updated_at), 'day'))
                        var DateDiff = (dayjs().diff(dayjs(element.updated_at), 'day') > 0) ? dayjs().diff(dayjs(element.updated_at), 'day') + ` Days ago` : `Today`
                        document.getElementById("item-container").innerHTML += (`<div class="mt-3">
                        <div
                            class="p-4 mx-auto text-center bg-white shadow h-36 w-96 ">
                            <div class="flex items-center justify-between h-full">
                                <div class="flex flex-col justify-between h-full">
                                    <div class=" p-3 rounded-xl">
                                        <span class="text-xl">
                                            `+ element.name + `
                                        </span>
                                    </div>
                                    <div class=" p-3">
                                        <span class="text-xs ">
                                            <button onclick="window.location.href='/item/update/`+ element.id + `';" type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent">
                                                <svg class="w-3 h-3 me-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
                                                Edit
                                            </button>
                                        </span>
                                    </div>
                                    <div class="text-xs">
                                        <span class="mb-0 text-left text-gray-500 ">
                                            Last Update :
                                        </span>
                                        <span>`+ DateDiff + `</span>
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

