
$(function(){
    var resJson = {
        seeking: {
            type: '눈치백단 인정추구형',
            title: '누구에게든 쉽게 호감을 얻지만 타인을 신경 쓰느라 정작 자신에게는 소홀한 유형',
            content: '한국인 대상으로 실시한 설문조사 결과에 의하면 가장 많은 유형의 완벽주의자들이 이 유형에 속하며(약 38퍼센트) 다른 유형보다 완벽주의 수준이 가장 높다. 이들은 다른 사람에게 인정을 받기 위해 움직이기 때문에 언제나 상냥하고 친절하며, 다른 사람의 일을 돕는 데 망설임 없이 나선다. 또한 매우 사교적이고 친절해서 딱 봐도 호감이 가는, 그야말로 ‘만인에게 좋은 사람’이다. 사람을 가장 큰 재산으로 여기기 때문에 꼭 필요하지 않은 사람과도 좋은 관계를 유지하기 위해 애쓰며, 칭찬에 약한 탓에 자신이 해내기 어려운 일도 칭찬을 해주며 부탁하면 덥석 받아들이고 나서 혼자서 속을 끓이는 경향이 있다.',
            tag: '#일단 친절#사람이 재산#칭찬은 나의 원동력#인정받지 못하면 불안#자기 돌봄에 소홀',
            img: '/content/media/img/seeking-type.jpg'
        },
        spurt: {
            type: '스릴추구 막판스퍼트형',
            title: '임기응변이 뛰어나지만 중요한 일을 맡았을 때 실패와 평가에 대한 두려움이 커져 일을 미루는 경향이 있는 유형',
            content: '위기에 직면했을 때(주로 데드라인에 임박해 일을 마무리해야 할 때) ‘위기 탈출 넘버원’ 수준의 임기응변 능력을 보여준다. 이들은 ‘내가’ 결정하는 것이 중요하기 때문에 남이 지시한 일이나 하기 싫은 일에는 집중을 하지 못한다. 이런 이유로 어떤 과제가 주어지면 하고 싶은 마음이 들 때까지 기다리거나 완성도를 높이느라 일처리가 늦어지기쉬운데, 이런 상황에서는 속으로 자신을 꾸짖고 후회를 많이 하는 경향이 있다. 또한 다른 유형보다 완벽주의 기준이 높은 편이고, 자신만의 스타일을 고집하는 경향이 있다. 자유주의자일 것 같지만 나름 원칙주의자여서, 남에게 폐를 끼치거나 눈 밖에 나는 행동을 하는 것을 싫어하고 다른 사람들도 상식에 맞추어 행동하길 기대한다.',
            tag: '#기분파#수동적인 꾸물거림#망신에 대한 두려움#미리 핑곗거리 만들기#속으론 후회',
            img: '/content/media/img/spurt-type.jpg'
        },
        safety: {
            type: '방탄조끼 안정지향형',
            title: '신중하고 성실해서 많은 사람들에게 환영받지만 안전과 현상 유지를 1순위로 여기기 때문에 변화나 도전을 기피하는 경향이 있는 유형',
            content: '이 유형은 신중하고 성실한 덕분에 한국에서 가장 환영받는 이른바 ‘한국형 완벽주의자’로, ‘개인적인 실패’를 피하기 위해 움직인다. 자신을 적극적으로 드러내지 않지만 적절한 답을 알고 있어서 중요한 일을 맡는 경우가 많다. 이들은 어떤 일을 시작할 때 조용히 분석하고, 특히 일이 틀어질 위험성을 차단하기 위해 철저하게 계획한다. 완벽주의를 생각할 때 흔히 떠올리는 신중함, 무결점 같은 단어에 잘 어울리는 유형이다. 심사숙고하고 말을 아끼며, 팩트 중심으로 이야기하고, 결코 어떤 것도 단언하지 않는 스타일이다. 100퍼센트 확신할 수 없는데 뭔가를 예단하는 것은 너무 위험하고 무책임한 일이라고 생각하기 때문이다. 이런 이유로 눈앞의 새로운 기회를 재빨리 잡거나 활용하는 능력은 다소 떨어지는 편이다.',
            tag: '#안전제일#자기-의존적#숨은 공로자#효율성 추구#앓는 소리 못해',
            img: '/content/media/img/safety-type.jpg'
        },
        growth: {
            type: '강철멘탈 성장지향형',
            title: '자신감 있고 주도적이지만 ‘조화’를 강조하는 한국 사회에서는 일면 ‘튀는 사람’으로 인식될 수도 있는 유형',
            content: '서양에서는 가장 행복한 완벽주의자로 본다. 이들은 강력한 성취지향적 경향을 지니고 있기 때문에 ‘더 멋지고 좋은 것을 얻기’ 위해 모험을 하는 데 주저함이 없다. 다른 사람의 시선보다는 자신의 기준에 따라 행동하고, 스스로 가치 있다고 생각하는 것을 얻고자 적극적으로 움직인다. “나는 무엇이든 할 수 있고, 이 일도 반드시 해낼 것이다”라는 자신감에 가득 차 있어서 어떤 일을 시작할 때 망설이거나 걱정에 휩싸이지 않는다. 아울러 자신의 모자란 부분에 얽매여 주저하기보다, 부족한 점은 빨리 보완하고 어떤 지점에서 더 나아질 여지가 있는지를 세심하게 찾아내고, 성취를 이루었을 때 누릴 뿌듯함과 여러 현실적인 혜택들을 기대하기 때문에 진행 과정에서 쉽게 지치거나 포기하지 않는다. 한편 다른 사람들의 실수나 어려움을 이해하지 못하고, 공감대 형성이라는 측면에서 취약한 모습을 보일 때가 있다.',
            tag: '#높은 자존감#성장 과정을 중요시#돌파력 #결정은 과감히#좀 다툴 수도 있지',
            img: '/content/media/img/growth-type.jpg'
        }
    };


    var res = getParameterByName('res');

    if(res != '' && (res === 'seeking' || res === 'spurt' || res === 'safety' || res === 'growth')){
        $('#c_tag').empty();

        var resObj = resJson[res];
        //$('#title_type').html(resObj.type);
        $('#c_title').html(resObj.title);
        $('#c_subj').html(resObj.content);
        $('#type_img').attr('src', resObj.img);
        $('meta[property="og:image"]').attr('content', 'http://www.perfect4.co.kr' + resObj.img);

        var tagArr = resObj.tag.split('#');
        var tagHtml = '';

        for(var i=1; i<tagArr.length; i++){
            tagHtml = '<span>#'+tagArr[i]+'<span>';
            $('#c_tag').append(tagHtml);
        }
    }



    var v1 = getParameterByName('v1');
    var v2 = getParameterByName('v2');
    var v3 = getParameterByName('v3');
    var v4 = getParameterByName('v4');
    var v5 = getParameterByName('v5');

    var per = (parseInt(v1) + parseInt(v2) + parseInt(v3) + parseInt(v4) + parseInt(v5)) / 5;
    $('#title_type').html(per + '%');

    setChart(v1, v2, v3, v4, v5);
});

$(document).on('click', '#rebtn', function(){
    location.href="/index.html";
});

$(document).on('click', '#book_img', function(){
    window.open('https://book.naver.com/bookdb/book_detail.nhn?bid=18005295', '_blank');
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function setChart(v1, v2, v3, v4, v5){
    $('#chart').remove();
    var chartHtml = '<canvas class="chart" id="chart" width="300" height="300"></canvas>';
    $('#chart_box').append(chartHtml);
    var ctx = document.getElementById('chart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['실수에 대한 지나친 염려', '철저한 정리 정돈 습관', '행동에 대한 의심', '부모의 높은 기대', '높은 성취 기준'],
            datasets: [{
                label: '결과',
                data: [v1, v2, v3, v4, v5],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scale: {
                gridLines: {
                color: "black",
                lineWidth: 1
                },
                angleLines: {
                display: false
                },
                ticks: {
                beginAtZero: true,
                min: 0,
                max: 100,
                stepSize: 20
                },
                pointLabels: {
                fontSize: 12,
                fontColor: "black"
                }
            },
            legend: {
                display: false
            }
        }
    });   
}