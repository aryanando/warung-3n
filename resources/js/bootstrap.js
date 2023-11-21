/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// import Pusher from 'pusher-js';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
//     wsHost: import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
//     wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
//     wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
//     forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
// });

document.getElementById("default-search")
    .addEventListener("input", (event) => {
        var inputValue = document.getElementById("default-search").value
        if (inputValue.length >= 3) {
            axios.get('http://my-development-01.test/item/?name='+inputValue).then(res => {
                console.log(res.data);
                if (res.data.data.length > 0) {
                    document.getElementById("item-container").innerHTML = ''
                    var items = (res.data.data);
                    items.forEach(element => {
                        document.getElementById("item-container").innerHTML += (`<div class="mt-3">
                        <div
                            class="p-4 mx-auto text-center bg-white border-indigo-500 rounded shadow h-36 w-96 dark:bg-gray-800">
                            <div class="flex items-center justify-between h-full">
                                <div class="flex flex-col justify-between h-full">
                                    <div class=" p-3 border rounded-xl">
                                        <span class="dark:text-white text-xl">
                                            `+element.name+`
                                        </span>
                                    </div>
                                    <div class=" p-3">
                                        <span class="dark:text-white text-xs ">
                                            <a class="text-blue-600" href='/item/update/`+element.id+`'>Edit</a>
                                        </span>
                                    </div>
                                    <div class="text-xs">
                                        <span class="mb-0 text-left text-gray-500 dark:text-gray-300">
                                            Last Update :
                                        </span>
                                        <span>`+element.updated_at+`</span>
                                    </div>
                                </div>
                                <div class="flex flex-col justify-between h-full">
                                    <p class="text-2xl font-bold text-gray-900 dark:text-white">
                                        <span class="text-sm">
                                            Rp.
                                        </span>
                                        <span>`+element.sell_price+`</span>
                                        <span class="text-gray-300 text-xs">
                                            / `+element.unit+`
                                        </span>
                                    </p>

                                    <div class="">
                                        <p class="text-sm font-light text-gray-300">
                                            Harga Kulak
                                        </p>
                                        <p class="text-m font-bold text-gray-900 dark:text-white">
                                            <span class="text-sm">
                                                Rp.
                                            </span>
                                            <span>`+element.base_price+`</span>
                                            <span class="text-sm text-gray-300">
                                                / `+element.unit+`
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> `)
                    });

                }else{
                    document.getElementById("item-container").innerHTML = ''
                }
            })
        }else{
            document.getElementById("item-container").innerHTML = ''
        }
    });

