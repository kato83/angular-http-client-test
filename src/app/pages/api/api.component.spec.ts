import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiComponent } from './api.component';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ApiService } from '../../services/api.service';

describe('ApiComponent', () => {
  let component: ApiComponent;
  let fixture: ComponentFixture<ApiComponent>;
  let httpTestingController: HttpTestingController;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiComponent],
      providers: [
        ApiService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApiComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  afterEach(() => {
    // テスト後にHTTPリクエストが処理されているか確認
    httpTestingController.verify();
  });

  it('should fetch and display data from the API via ExampleService', () => {
    const mockData = [
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      }
    ];

    // コンポーネントのngOnInitでサービスが呼び出されるので、テストを開始
    fixture.detectChanges();

    // Httpリクエストの期待値を設定
    const req = httpTestingController.expectOne({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/todos'
    });
    expect(req.request.method).toBe('GET');

    // モックデータを返す
    req.flush(mockData);

    // コンポーネントがモックデータを受け取ったことを確認
    expect(component.todos).toEqual(mockData);

    // 受け取った後にコンポーネント（HTML）の再描画処理を開始
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).querySelectorAll('li').length).toEqual(mockData.length);
  });
});
