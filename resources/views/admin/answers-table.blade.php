@extends('admin.partials.main')

@section('content')
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">No. Pertanyaan</th>
        <th scope="col">Jawaban</th>
      </tr>
    </thead>
    <tbody>
        @foreach ($answers as $answer)
            <tr>
            <th scope="row">{{ $loop->iteration }}</th>
            <td>{{ $answer->preevent_question_id }}</td>
            <td>{{ $answer->answer }}</td>
            </tr>
        @endforeach
    </tbody>
  </table>
@endsection