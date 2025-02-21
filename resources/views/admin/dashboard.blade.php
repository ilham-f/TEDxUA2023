@extends('admin.partials.main')

@section('content')
    {{-- <h1>COMING SOON</h1> --}}
    <div class="container">
        <div class="row g-2 g-lg-3">
            <div class="col">
                <div class="card">
                    <div class="card-body row">
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                    <td><h3>Total Tiket Terjual</h3></td>
                                    <td><h3>:</h3></td>
                                    <td><h3>{{ count($tikets) }}</h3></td>
                                </tr>
                                <tr>
                                    <td>Early Bird</td>
                                    <td>:</td>
                                    <td>{{ count($early) }}</td>
                                </tr>
                                <tr>
                                    <td>Special Price</td>
                                    <td>:</td>
                                    <td>{{ count($special) }}</td>
                                </tr>
                                <tr>
                                    <td>Normal Price</td>
                                    <td>:</td>
                                    <td>{{ count($normal) }}</td>
                                </tr>
                                <tr>
                                    <td>Bundle A</td>
                                    <td>:</td>
                                    <td>{{ count($bundleA) }}</td>
                                </tr>
                                <tr>
                                    <td>Bundle B</td>
                                    <td>:</td>
                                    <td>{{ count($bundleB) }}</td>
                                </tr>
                                <tr>
                                    <td>Bundle C</td>
                                    <td>:</td>
                                    <td>{{ count($bundleC) }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col">
            </div>
            <div class="col">
            </div>
        </div>
    </div>
@endsection
