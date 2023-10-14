@extends('admin.partials.main')

@section('content')
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">No. Pertanyaan</th>
        <th scope="col">Pertanyaan</th>
      </tr>
    </thead>
    <tbody>
        @foreach ($questions as $question)
            <tr>
            <th scope="row">{{ $loop->iteration }}</th>
            <td>{{ $question->questions }}</td>
            </tr>
        @endforeach
    </tbody>
  </table>
@endsection
