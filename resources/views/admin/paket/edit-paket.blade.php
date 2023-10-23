@extends('admin.partials.main')

@section('content')
<div class="card">
  <div class="card-body">
    <p class="card-title">Data Paket Baru</p>
    <div class="row">
      <div class="col-12">
<div class="card">
    <div class="card-header">
      <button type="button" class="btn btn btn-danger" onclick="window.location='{{ route('packets-index') }}'">
         Kembali
      </button>
    </div>
    <div class="card-body">
        <form method="post" action="{{ route('packets-update',$paket->id) }}">
        @csrf
        @method('put')
        <form>
            <div class="row mb-3">
              <label for="nama_paket" class="col-sm-2 col-form-label">Nama Paket</label>
              <div class="col-sm-10">
                <input type="text" class="form-control form-control-sm" id="nama_paket" name="nama_paket" value="{{old('nama_paket', $paket->nama_paket)}}">
            </div>
            </div>
            <div class="row mb-3">
              <label for="detail_paket" class="col-sm-2 col-form-label">Detail Paket</label>
              <div class="col-sm-10">
                <input type="text" class="form-control form-control-sm" id="detail_paket" name="detail_paket" value="{{old('detail_paket', $paket->detail_paket)}}">
            </div>
            </div>
            <div class="row mb-3">
            <label for="harga" class="col-sm-2 col-form-label">Harga</label>
              <div class="col-sm-3">
                <input type="number" class="form-control form-control-sm" id="harga" name="harga" value="{{old('harga', $paket->harga)}}" >
            </div>
            </div>
                      <div class="col-sm-6">
                        <button type="submit" class="btn btn btn-primary float-right">
                            Simpan
                        </button>
                      </div>
                    </div>
              </div>
            </div>
          </form>
    </div>
  </div>
</div>

@endsection