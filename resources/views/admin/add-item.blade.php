<x-app-layout>
    @if (Auth::user()->isAdministrator())
        {{-- @dd("Its Admin") --}}
    @endif
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Add Item') }}
        </h2>
    </x-slot>
    @if (Session::has('message'))
        <p class="alert {{ Session::get('alert-class', 'alert-info') }}">{{ Session::get('message') }}</p>
    @endif
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-12">
                <form action="{{ url('/item/insert') }}" method="POST">
                    @csrf
                    <div class="space-y-12">
                        <div class="border-b border-gray-900/10 pb-12">
                            <h2 class="text-base font-semibold leading-7 text-gray-900">Item Information</h2>
                            <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly
                                so be careful what you share.</p>

                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div class="sm:col-span-4">
                                    <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Item
                                        Name</label>
                                    <div class="mt-2">
                                        <div
                                            class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            {{-- <span
                                                class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> --}}
                                            <input type="text" name="name" id="name" autocomplete="name"
                                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="Item Name" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="sm:col-span-4">
                                    <label for="base_price"
                                        class="block text-sm font-medium leading-6 text-gray-900">Base Price</label>
                                    <div class="mt-2">
                                        <div
                                            class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <span
                                                class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Rp.
                                            </span>
                                            <input type="number" name="base_price" id="base_price"
                                                autocomplete="base_price"
                                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="Base Price" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="sm:col-span-4">
                                    <label for="sell_price"
                                        class="block text-sm font-medium leading-6 text-gray-900">Sell Price</label>
                                    <div class="mt-2">
                                        <div
                                            class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <span
                                                class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Rp.
                                            </span>
                                            <input type="number" name="sell_price" id="sell_price"
                                                autocomplete="sell_price"
                                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="Sell Price" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="sm:col-span-4">
                                    <label for="unit"
                                        class="block text-sm font-medium leading-6 text-gray-900">Unit</label>
                                    <div class="mt-2">
                                        <div
                                            class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            {{-- <span
                                                class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> --}}
                                            <input type="text" name="unit" id="unit" autocomplete="unit"
                                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="Unit" required>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                        <button type="submit"
                            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
