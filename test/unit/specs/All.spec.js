import Vue from 'vue'
import PhotoDetail from '@/components/PhotoDetail'
import PhotoList from '@/components/PhotoList'
import UserInfo from '@/components/UserInfo'
import PhotoDescription from '@/components/PhotoDescription'
import Rating from '@/components/Rating'
import jsonData from '@/api.json'
import sinon from 'sinon'
import vuex from 'vuex'
import jest from 'jest'
import { shallow, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(vuex)


describe('UserInfo.vue', () => {
  it('renders the correct user data', () => {
    const Constructor = Vue.extend(UserInfo)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent)
      .to.equal('asedlar@apple.com Anna Sedlar')
  })
})

describe('PhotoList.vue', () => {
  let vm;

  beforeEach(() => {
    const Constructor = Vue.extend(PhotoList)
    vm = new Constructor().$mount()
  })

  it('is titled Photo Roll', () => {
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Photo Roll')
  })

  it('calls store action "selectPhoto" when photo is clicked', () => {
    let store = new vuex.Store({
      state: {},
      actions: { selectPhoto: jest.fn() }
    })
    const wrapper = shallow(PhotoList, { store, localVue })
    wrapper.find('img').trigger('click')
    expect(actions.selectPhoto).toHaveBeenCalled()
  })

  // it('has an array of photos', () => {
  //   const defaultData = PhotoList.data()
  //   expect(defaultData.photos).toBe(Array)
  // })

  // it('Click Event works', () => {
    const spy = sinon.spy()
    // const wrapper = $mount(YesNoComponent, {
      // propsData: {
      //   callMe: spy
      // }
    // })
    // vm.$el.querySelector('.thumbnail-list ul li img').simulate('click')

//     spy.should.have.been.calledWith('yes')
//   })
})

describe('PhotoDescription.vue', () => {
  it('should render correct contents', () =>{
    const Constructor = Vue.extend(PhotoDescription)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.description p').textContent)
      .to.equal('Description:  ')
  })
})


// describe('PhotoDetail.vue', () => {
//   it(`should update when photo description is changed.`, done => {
//     const Constructor = Vue.extend(PhotoDetail);
//     const comp = new Constructor().$mount();
//     data () {
//       return {
//           mainPhotoObj: jsonData[0],
//           selectedPhotoURL: jsonData[0].url,
//           selectedPhotoTitle: jsonData[0].title,
//           selectedPhotoDescription: jsonData[0].description,
//           selectedPhotoRating: jsonData[0].rating
//       }
//     }
//     Vue.nextTick(() => {
//       expect(comp.$el.querySelector('.photo-detail').textContent)
//         .to.equal('A Puffin Description: Gazing at the sea  Rating: 5 stars');
//       // Since we're doing this asynchronously, we need to call done() to tell Mocha that we've finished the test.
//       done();
//     });
//   });
// });

// describe('PhotoList.vue', () => {
//   beforeEach(() => {
//     const Constructor = Vue.extend(PhotoList)
//     let vm = new Constructor({
//       data () {
//         return {
//           photos: [
//             {
//               "url": "https://source.unsplash.com/H_M4dX_F1LQ/",
//               "title": "A Puffin",
//               "description": "Gazing at the sea",
//               "rating": 5
//             },
//             {
//               "url": "https://source.unsplash.com/_snqARKTgoc/",
//               "title": "Interpid Bears",
//               "description": "",
//               "rating": 4
//             },
//             {
//               "url": "https://source.unsplash.com/14CsAc1hY1c/",
//               "title": "",
//               "description": "",
//               "rating": 0
//             }
//           ]
//         }
//       }, 
//       methods: {

//       },
//     })


//   describe('methods', () => {
//     it('emitChange', () => {
//       vm.inputData = 'Select...';
//       sinon.spy(vm, 'emitChange');
//       vm.emitChange(vm.inputData);
//       expect(vm.emitChange).to.be.called;
//     })
//   })
// })

  // describe('something'), () => {
  //   it('should render correct contents', () => {
  //     const Constructor = Vue.extend(PhotoList)
  //     const vm = new Constructor().$mount()
  //     expect(vm.$el.querySelector('.thumbnail-list').textContent)
  //       .to.equal('Photo Roll')
  //   });
  // };

//   describe('Rating.vue'), () => {
//     it('should render correct contents', () => {
//       const Constructor = Vue.extend(Rating)
//       const vm = new Constructor().$mount()
//       expect(vm.$el.querySelector('.rating').textContent)
//         .to.contain('Rating')
//     })
//   }